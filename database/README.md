# Database Schema

This folder contains the initial PostgreSQL schema for the movie recommendation and streaming platform. The schema covers:

- Users + profile data
- Movies, genres, cast, and availability across streaming services
- Watchlists and ratings
- Group movie-night sessions with per-user genre preferences
- Recommendation runs and ranked outputs
- Chat sessions/messages for the AI agent

## Usage

1. Create a database and enable `pgcrypto` for UUID generation.
2. Run the schema file.

```bash
psql -d your_database -f database/schema.sql
```

If you prefer a migration tool later (Prisma, Knex, Alembic), this schema can be translated into the tool's migration format.
