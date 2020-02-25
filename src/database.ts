import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'prueba',
    port: 5432
});