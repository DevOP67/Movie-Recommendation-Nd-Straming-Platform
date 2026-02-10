const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { db } = req.app.locals;
    const result = await db.query('SELECT NOW() AS now');
    res.json({ status: 'ok', time: result.rows[0].now });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
