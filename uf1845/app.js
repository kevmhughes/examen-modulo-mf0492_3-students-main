const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb+srv://sololectura:sololectura@cluster0.c8tq0vp.mongodb.net/sample_movies';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('sample_mflix');
        const collection = db.collection('movies');

        // Consulta de ejemplo: Encuentra todas las películas cuyo idioma sea "Ukrainian", ordenadas de forma decreciente por año de publicación
        const ukrainianMovies = await collection.find(
            { languages: 'Ukrainian' },
            { projection: { title: 1, year: 1, languages: 1, _id: 0 } }
        )
            .sort({ year: -1 })  // Ordena de forma decreciente por año
            .limit(3)  // Limitamos a 3 para el ejemplo
            .toArray();
        console.log('Consulta 0 - Películas en Ucraniano:', ukrainianMovies);

        // Consulta 1: Encuentra 3 películas del género "Action", mostrando solo título y género. 
        const actionMovies = await collection.find(
            { genres: "Action" },
            { projection: { title: 1, genres: 1, _id: 0 } }
        )
            .sort({ year: -1 })
            .limit(3)
            .toArray();
        console.log('Consulta 1 - Películas de acción:', actionMovies);

        // Consulta 2: Encuentra 3 películas dirigidas por "Christopher Nolan", mostrando solo título y director
        const nolanMovies = await collection.find(
            { directors: "Christopher Nolan" },
            { projection: { title: 1, directors: 1, _id: 0 } }
        )
            .sort({ year: -1 })
            .limit(3)
            .toArray();
        console.log('Consulta 2 - Películas de Christopher Nolan:', nolanMovies);

        // Consulta 3: Encuentra 3 películas de los años 2000 o más recientes, mostrando título y año
        const recentMovies = await collection.find(
            { year: {
                $gte: 2000
            }},
            { projection: { title: 1, year: 1, _id: 0 } }
        )
            .sort({ year: -1 })  // Ordena por año de manera descendente (más recientes primero)
            .limit(3)
            .toArray();
        console.log('Consulta 3 - Películas a partir del año 2000:', recentMovies);

        // Consulta 4: Encuentra 3 películas ordenadas por fecha de lanzamiento en ordenascendente. Las más antiguas de toda la base de datos
        const orderedMovies = await collection.find(
            {},
            { projection: { title: 1, year: 1, _id: 0 } }
        )
            .sort({year: 1 })
            .limit(3)
            .toArray();
        console.log('Consulta 4 - Películas ordenadas por año de forma creciente:', orderedMovies);

        // Consulta 5 (Difícil): Encuentra 3 películas con una calificación mayor a 8.5 y más de 10000 votos en IMDb, mostrando solo título, año y calificación. Ordénalas de forma descendiente por calificación
        const topRatedMovies = await collection.find(
            { "imdb.rating": {$gt: 8.5},
              "imdb.votes": {$gt: 10000}
            },
            { projection: { title: 1, year: 1, 'imdb.rating': 1, _id: 0 } }
        )
            .sort({"imdb.rating": -1})  // Ordena por calificación en orden descendente
            .limit(3)
            .toArray();
        console.log('Consulta 5 - Películas con calificación > 8.5 y más de 10000 votos ordenadas por calificación de forma decreciente:', topRatedMovies);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
