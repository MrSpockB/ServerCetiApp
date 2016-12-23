var config = require('./app/config/config');
var Schema = require('./app/config/schema');
var Data = require('./app/config/data');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex = require('knex')(
{
	client: 'mysql',
	connection: 
	{
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database,
		charset: config.charset
	}

});

function createTable(tableName) {
  return knex.schema.createTable(tableName, function (table) {
    var column;
    var columnKeys = _.keys(Schema[tableName]);
    _.each(columnKeys, function (key) {
      if (Schema[tableName][key].type === 'text' && Schema[tableName][key].hasOwnProperty('fieldtype')) {
        column = table[Schema[tableName][key].type](key, Schema[tableName][key].fieldtype);
      }
      else if (Schema[tableName][key].type === 'string' && Schema[tableName][key].hasOwnProperty('maxlength')) {
        column = table[Schema[tableName][key].type](key, Schema[tableName][key].maxlength);
      }
      else {
        column = table[Schema[tableName][key].type](key);
      }
      if (Schema[tableName][key].hasOwnProperty('nullable') && Schema[tableName][key].nullable === true) {
        column.nullable();
      }
      else {
        column.notNullable();
      }
      if (Schema[tableName][key].hasOwnProperty('primary') && Schema[tableName][key].primary === true) {
        column.primary();
      }
      if (Schema[tableName][key].hasOwnProperty('unique') && Schema[tableName][key].unique) {
        column.unique();
      }
      if (Schema[tableName][key].hasOwnProperty('unsigned') && Schema[tableName][key].unsigned) {
        column.unsigned();
      }
      if (Schema[tableName][key].hasOwnProperty('references')) {
        column.references(Schema[tableName][key].references);
      }
      if (Schema[tableName][key].hasOwnProperty('defaultTo')) {
        column.defaultTo(Schema[tableName][key].defaultTo);
      }
    });
  });
}

function createTables () {
  var tables = [];
  var tableNames = _.keys(Schema);
  //console.log(tableNames);
  //return null;
  tables = _.map(tableNames, function (tableName) {
    return function () {
      return createTable(tableName);
    };
  });
  return sequence(tables);
}

function insertData(){
  var tableNames = _.keys(Data);
  //Example
  // Normalizes for empty keys on multi-row insert:
  //knex('coords').insert([{x: 20}, {y: 30},  {x: 10, y: 20}])


  /*
  knex.select('*')
  .from('users')
  .where({name: 'Tim'})
  .then(function(rows) {
    return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
  })
  .then(function(id) {
    console.log('Inserted Account ' + id);
  })
  .catch(function(error) { console.error(error); });
  */

  



  _.map(tableNames, function(tableName) {
    return function () {
      //var rows = [{...}, {...}];
      var chunkSize = 30;
      knex.batchInsert('TableName', Data[tableName], chunkSize)
        .returning('id')
        .then(function(ids) {  })
        .catch(function(error) {  });

      knex.transaction(function(tr) {
        return knex.batchInsert('TableName', rows, chunkSize)
          .transacting(tr)
        })
        .then(function() {  })
        .catch(function(error) {  });
    };
  });
}


createTables()
.then(function() {
  console.log('Tables created!!');
  
}).then(function(){

  insertData();
  console.log('Insert data completed!!');
})
.then(function() {
  process.exit(0);
})
.catch(function (error) {
  throw error;
});