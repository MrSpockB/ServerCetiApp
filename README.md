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

>export NODE_ENV=development

 - Si se esta trabajando en Windows, ejecutar
  
>set NODE_ENV=development

 - Ejecutar el servidor con

> node migrate.js

 - Si se esta trabajando en un ambiente Unix ejecutar en la terminal
 

 

> nodemon index.js
