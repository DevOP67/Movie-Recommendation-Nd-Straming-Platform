const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createPool } = require('./services/db');
const healthRouter = require('./routes/health');
const moviesRouter = require('./routes/movies');
const recommendationsRouter = require('./routes/recommendations');
const chatRouter = require('./routes/chat');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const pool = createPool();
app.locals.db = pool;

app.use('/api/health', healthRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/recommendations', recommendationsRouter);
app.use('/api/chat', chatRouter);

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ error: 'Unexpected server error' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on http://localhost:${port}`);
});
