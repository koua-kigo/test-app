import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
const sql = postgres(connectionString);
export const db = drizzle(sql);

const main = async () => {
  console.log('Creating migrations table...');
  await sql.unsafe(`
    CREATE SCHEMA IF NOT EXISTS drizzle;
    CREATE TABLE IF NOT EXISTS drizzle.__drizzle_migrations (
      id SERIAL PRIMARY KEY,
      hash text NOT NULL,
      created_at timestamp with time zone DEFAULT now()
    );
  `);
  console.log('Migrations table created.');
  await sql.end();
  process.exit(0);
};

main().catch((err) => {
  console.error('Error creating migrations table:', err);
  process.exit(1);
});

