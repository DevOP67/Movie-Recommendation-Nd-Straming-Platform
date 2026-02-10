const express = require('express');

const router = express.Router();

router.post('/message', async (req, res, next) => {
  try {
    const { db } = req.app.locals;
    const { userId, message } = req.body || {};

    if (!userId || !message) {
      res.status(400).json({ error: 'userId and message are required.' });
      return;
    }

    const client = await db.connect();
    try {
      await client.query('BEGIN');
      const sessionResult = await client.query(
        'INSERT INTO chat_sessions (user_id) VALUES ($1) RETURNING id',
        [userId]
      );
      const sessionId = sessionResult.rows[0].id;

      await client.query(
        'INSERT INTO chat_messages (chat_session_id, role, content) VALUES ($1, $2, $3)',
        [sessionId, 'user', message]
      );

      const reply =
        'Thanks! I can help with recommendations once the catalog is loaded. Try asking for a genre mix.';

      await client.query(
        'INSERT INTO chat_messages (chat_session_id, role, content) VALUES ($1, $2, $3)',
        [sessionId, 'assistant', reply]
      );
      await client.query('COMMIT');

      res.json({ sessionId, reply });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
