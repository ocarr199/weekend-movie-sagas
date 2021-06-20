const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




router.get('/', (req, res) => {
  // Add query to get all genres
// selecting all of the movie.titles and genres.names from the datbase
//  these are correlated to eachother from 3 tables, genres, 
// movies_genres, and movies all of the genres the movies belongs to are 
// shown from this query.
  const query = `SELECT movies.title, genres.name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  GROUP BY movies.title,  genres.name
  ORDER BY movies.title ASC;
  `;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;