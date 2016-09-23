# ServerCetiApp

Pre-requisitos
-------------
 1. Nodejs
 2. Servidor MySQL
 3. Instalar nodemon de manera global

> npm install -g nodemon

Instrucciones
-------------

- Despues de clonar el repo, ejecutar 

> npm install

 - Modificar el archivo app/config/env/development.js con los datos del servidor local de MySQL
 - Abrir una terminal, moverse a la carpeta clonada y ejecutar el siguiente comando, creara las tablas definidas en app/config/schema.js

> node migrate.js

 - Opcional: Si se esta trabajando en un ambiente Unix ejecutar en la terminal
 
>export NODE_ENV=development

 - Ejecutar el servidor con
 

> nodemon index.js
