# Backend Service

This backend provides an API for movies, recommendations, and chat sessions using PostgreSQL.

## Prerequisites

- Node.js 18+
- PostgreSQL (schema applied from `database/schema.sql`)

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your database credentials.

## Run

```bash
npm run dev
```

The API will start on `http://localhost:4000`.

## API Endpoints

- `GET /api/health` - database connectivity check
- `GET /api/movies` - list movies
- `GET /api/movies/:id` - movie details
- `POST /api/recommendations/run` - simple genre intersection recommendations
- `POST /api/chat/message` - chat stub (stores messages)
