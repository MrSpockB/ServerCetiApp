var config = require('./app/config/config');
var Schema = require('./app/config/schema');
var data = require('./app/config/data');
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

var show_details = false;

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
  tables = _.map(tableNames, function (tableName) {
    return function () {
      
      return createTable(tableName);
    };
  });
  return sequence(tables);
}

function removeForeignKeyChecks() {
  return knex.raw('SET foreign_key_checks = 0;');
}

function addForeignKeyChecks() {
  return knex.raw('SET foreign_key_checks = 1;');
}

function dropTable(tableName){
  return knex.schema.dropTableIfExists(tableName);
}
function dropTables(){
  var sequences = [];
  var tableNames = _.keys(Schema);
  sequences = _.map(tableNames, function (tableName) {
    return function () {
      return removeForeignKeyChecks()
          .then(function(){
            return removeForeignKeyChecks();
          })
          .then(function(){
            return knex.schema.dropTableIfExists(tableName);
          })
          .then(function(info){
            if(show_details)
            console.log("Table " + tableName + " droped");
          }).catch(function(error){
            console.log(error);
          });
    };
  });
  return sequence(sequences);
}

function clearData(){
  var sequences = [];
  var tableNames = _.keys(data);
  sequences =_.map(tableNames, function (tableName) {
      return function(){
        return removeForeignKeyChecks()
          .then(function(){
            return knex(tableName).truncate();
          })
          .then(function(info){
            if(show_details)
            console.log("table "+ tableName +" cleaned");
          })
          .then(function(){
            return addForeignKeyChecks();
          });
      };
      
  });
  return sequence(sequences);
}

function insertData(){
  var tableNames = _.keys(data);
  var finalData = [];
  finalData =_.map(tableNames, function (tableName) {
    return function () {
      return knex(tableName)
      .insert(data[tableName])
      .then(function(info){
        if(show_details)
        console.log(info + " data inserted into " + tableName)
      });
    };
  });
  return sequence(finalData);
}





removeForeignKeyChecks()
.then(function(){
  dropTables()
  .then(function(){
    console.log("Tables Droped");
  })
  .then(function(){ 
    return createTables();
  })
  .then(function() {
    console.log('Tables created');

  })
  .then(function(){
      return clearData();
  })
  .then(function(){
      console.log("Data cleaned");
      addForeignKeyChecks();
  })
  .then(function() {
    return insertData();
  })
  .then(function(){
          console.log('Data inserted');
          process.exit(0);
  })
  .catch(function (error) {
    console.error(error); 
    throw error;
  });
  
})
.catch(function (error) {
  console.error(error); 
  throw error;
});

