const express = require('express');

const router = express.Router();

router.post('/run', async (req, res, next) => {
  try {
    const { db } = req.app.locals;
    const { genres = [] } = req.body || {};

    if (!Array.isArray(genres) || genres.length === 0) {
      res.status(400).json({ error: 'Provide a non-empty genres array.' });
      return;
    }

    const { rows } = await db.query(
      `SELECT m.id,
              m.title,
              m.description,
              m.release_year,
              m.rating,
              ARRAY_REMOVE(ARRAY_AGG(g.name), NULL) AS genres
         FROM movies m
         JOIN movie_genres mg ON mg.movie_id = m.id
         JOIN genres g ON g.id = mg.genre_id
        WHERE g.name = ANY($1)
        GROUP BY m.id
       HAVING COUNT(DISTINCT g.name) = $2
        ORDER BY m.rating DESC NULLS LAST, m.release_year DESC
        LIMIT 20`,
      [genres, genres.length]
    );

    res.json({ data: rows, matchedGenres: genres });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
