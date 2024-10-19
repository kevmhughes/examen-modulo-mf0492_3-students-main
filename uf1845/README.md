# Realizando consultas con MongoDB

Implementa todas las consultas sobre la base de datos _sample\_mflix_ de la colección _movies_.
Para conseguir cada consulta tan solo es necesario substituir el comentario `/** FILL ME */` por el código adecuado.

Casi todas las consultas estan **ya ordenadas**  por año de forma decreciente.

## Cómo ejecutar el programa

`node app.js`

## Consulta 1

Obtén las 3 primeras películas del género (_campo genres_) **action** ordenadas por el campo _year_ de forma decreciente.

## Consulta 2

Encuentra 3 películas dirigidas por "Christopher Nolan" (_campo directors_), mostrando solo título y director ordenadas por el campo _year_ de forma decreciente.

## Consulta 3

Encuentra 3 películas de los años 2000 o más recientes, mostrando título y año ordenadas por el campo _year_ de forma decreciente.

## Consulta 4

Encuentra 3 películas ordenadas por fecha de lanzamiento de forma creciente (campo _year_). Las más antiguas de toda la base de datos deben aparecer primero.

## Consulta 5 (Difícil)

Encuentra 3 películas con una calificación mayor a 8.5 y más de 10000 votos en IMDB, mostrando solo título, año y calificación. Ordénalas por calificación IMDB de forma decreciente.

## Estructura de un documento de esta colección

```
{
   "_id":{
      "$oid":"573a1390f29313caabcd42e8"
   },
   "plot":"A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
   "genres":[
      "Short",
      "Western"
   ],
   "runtime":{
      "$numberInt":"11"
   },
   "cast":[
      "A.C. Abadie",
      "Gilbert M. 'Broncho Billy' Anderson",
      "George Barnes",
      "Justus D. Barnes"
   ],
   "poster":"https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
   "title":"The Great Train Robbery",
   "fullplot":"Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
   "languages":[
      "English"
   ],
   "released":{
      "$date":{
         "$numberLong":"-2085523200000"
      }
   },
   "directors":[
      "Edwin S. Porter"
   ],
   "rated":"TV-G",
   "awards":{
      "wins":{
         "$numberInt":"1"
      },
      "nominations":{
         "$numberInt":"0"
      },
      "text":"1 win."
   },
   "lastupdated":"2015-08-13 00:27:59.177000000",
   "year":{
      "$numberInt":"1903"
   },
   "imdb":{
      "rating":{
         "$numberDouble":"7.4"
      },
      "votes":{
         "$numberInt":"9847"
      },
      "id":{
         "$numberInt":"439"
      }
   },
   "countries":[
      "USA"
   ],
   "type":"movie",
   "tomatoes":{
      "viewer":{
         "rating":{
            "$numberDouble":"3.7"
         },
         "numReviews":{
            "$numberInt":"2559"
         },
         "meter":{
            "$numberInt":"75"
         }
      },
      "fresh":{
         "$numberInt":"6"
      },
      "critic":{
         "rating":{
            "$numberDouble":"7.6"
         },
         "numReviews":{
            "$numberInt":"6"
         },
         "meter":{
            "$numberInt":"100"
         }
      },
      "rotten":{
         "$numberInt":"0"
      },
      "lastUpdated":{
         "$date":{
            "$numberLong":"1439061370000"
         }
      }
   },
   "num_mflix_comments":{
      "$numberInt":"0"
   }
}
```

## Resultados esperados

```Consulta 0 - Películas en Ucraniano: [    
  {
    title: 'Liquidation',
    languages: [ 'Russian', 'Ukrainian' ],
    year: '2007è'
  },
  {
    title: 'The Guide',
    languages: [ 'Ukrainian', 'Russian', 'English' ],
    year: 2014
  },
  {
    title: 'Melody',
    languages: [ 'French', 'English', 'Ukrainian' ],
    year: 2014
  }
]
Consulta 1 - Películas de acción: [
  {
    genres: [ 'Action', 'Adventure', 'Sci-Fi' ],
    title: 'Halo: Nightfall'
  },
  {
    genres: [ 'Action', 'Sci-Fi', 'Thriller' ],
    title: 'Falling Skies'
  },
  { genres: [ 'Action', 'Thriller' ], title: 'Liquidation' }
]
Consulta 2 - Películas de Christopher Nolan: [
  { title: 'Interstellar', directors: [ 'Christopher Nolan' ] },
  {
    title: 'The Dark Knight Rises',
    directors: [ 'Christopher Nolan' ]
  },
  { title: 'Inception', directors: [ 'Christopher Nolan' ] }
]
Consulta 3 - Películas recientes a partir del año 2000: [
  { title: 'The Masked Saint', year: 2016 },
  { year: 2015, title: 'Ex Machina' },
  { title: 'The Stanford Prison Experiment', year: 2015 }
]
Consulta 4 - Películas ordenadas por año de forma creciente: [
  { title: 'The Kiss', year: 1896 },
  { title: 'The Kiss', year: 1896 },
  { title: 'The Great Train Robbery', year: 1903 }
]
Consulta 5 - Películas con calificación > 8.5 y más de 10000 votos. Ordenadas por calificación de forma decreciente: [
  { title: 'Band of Brothers', year: 2001, imdb: { rating: 9.6 } },        
  { title: 'Planet Earth', year: 2006, imdb: { rating: 9.5 } },
  {
    imdb: { rating: 9.3 },
    year: 1994,
    title: 'The Shawshank Redemption'
  }
]```