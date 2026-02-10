const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { db } = req.app.locals;
    const { rows } = await db.query(
      `SELECT m.id,
              m.title,
              m.description,
              m.release_year,
              m.rating,
              m.poster_url,
              m.backdrop_url,
              m.trailer_url,
              m.director,
              ARRAY_REMOVE(ARRAY_AGG(g.name), NULL) AS genres
         FROM movies m
         LEFT JOIN movie_genres mg ON mg.movie_id = m.id
         LEFT JOIN genres g ON g.id = mg.genre_id
        GROUP BY m.id
        ORDER BY m.release_year DESC, m.title ASC
        LIMIT 100`
    );

    res.json({ data: rows });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { db } = req.app.locals;
    const { id } = req.params;
    const { rows } = await db.query(
      `SELECT m.id,
              m.title,
              m.description,
              m.release_year,
              m.duration_minutes,
              m.rating,
              m.release_date,
              m.poster_url,
              m.backdrop_url,
              m.trailer_url,
              m.director,
              ARRAY_REMOVE(ARRAY_AGG(g.name), NULL) AS genres
         FROM movies m
         LEFT JOIN movie_genres mg ON mg.movie_id = m.id
         LEFT JOIN genres g ON g.id = mg.genre_id
        WHERE m.id = $1
        GROUP BY m.id`,
      [id]
    );

    if (!rows[0]) {
      res.status(404).json({ error: 'Movie not found' });
      return;
    }

    res.json({ data: rows[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
