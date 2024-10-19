# CatSalut APP

Des de CatSalut nos han mandado implementar una app para gestionar la información sobre los pacientes de la seguridad social. Implementa los diferentes apartados. Hemos creado una aplicación usando Express, EJS y Mongoose para crear y gestionar una base de datos de los pacientes almacenada en MongoDB.


## La tarea

En la mayoría de las ocasiones tan solo es necesario modificar o añadir una o dos líneas de código para obtener la funcionalidad. SOLAMENTE debes modificar el fichero o _endpoint_ especificado para conseguir el requisito.

[Demo](https://oscarm.tinytake.com/df/16ca641/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

## Cómo ejecutar el programa

`npm install`  
`npm run dev`

## Apartado A : Obtener la lista de pacientes en formato JSON

Modifica el _endpoint_ `GET /api/patients` (http://localhost:3000/api/patients) para obtener la lista de pacientes de la base de datos en formato JSON.

## Apartado B

Cuando accedemos a http://localhost:3000 no podemos ver el número de pacientes totales de la base de datos. Modifica el fichero *home.ejs* para arreglar este fallo.

## Apartado C

Disponemos de un formulario para comprobar los datos de un paciente dado su número de la seguridad social. Actualmente no está funcionando correctamente el comprobar si un paciente existe o no en la base de datos. Siempre devuelve lo mismo, pongamos lo que pongamos en el [formulario](http://localhost:3000/form).  Modifica el endpoint `GET /check` para conseguirlo. 

Puedes probar los siguientes SSN que son pacientes que sí existen en la base de datos:
- David Torres: 67890123456
- Natalia Gallego: 45678901210

<details>
  <summary>Pista</summary>
  <p>1. Necesitas obtener el número de la seguridad social de la query string.</p>
  <p>2. Hay que modificar la consulta Patient.findOne() para realizar la búsqueda del documento usando sú número de la seguridad social</p>
</details>

## Apartado D

Queremos llevar un registro de las peticiones que se hacen a la base de datos de la seguridad social. Cada vez que se haga una petición, escribe una entrada en el fichero de formato 'YEAR-MONTH-DAY.txt'

Cualquier mensaje será considerado como válido. Ejemplo:

`Se ha realizado una consulta sobre un paciente en la base de datos`

<details>
  <summary>Pista</summary>
  <p>Mira la carpeta utils 😉</p>
</details>

### BONUS - Apartado D - No puntuable

Especifica el número de la SSN que se comprueba en el registro de la consulta:

`Se ha realizado una consulta sobre el paciente número 45678901210`

### BONUS - Validaciones - No puntuable

1. Añade validación sobre el [SSN Español](https://docs.trellix.com/es-ES/bundle/data-loss-prevention-11.10.x-classification-definitions-reference-guide/page/GUID-AACF0E3A-3089-4578-83EB-3E6C3DB41684.html) en:
  - El formulario
  - El endpoint que realiza la consulta a la base de datos
  - El modelo 
