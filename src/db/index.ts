import { Pool } from "pg";
import config from "../config";

// PostgreSQL connection pool using Neon cloud database
export const pool = new Pool({
    connectionString: config.connection_string,
});

// Setup PostgreSQL schema and create table if it doesn't exist
export const initDB = async () => {
    try {

        // create 'users' table
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(20) NOT NULL,
        is_active BOOLEAN DEFAULT true,
        age INT,

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
        console.log("Database connected successfully!");

        // create 'profile' table
        await pool.query(`
        CREATE TABLE IF NOT EXISTS profiles(
        id SERIAL PRIMARY KEY,
        user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,

        bio TEXT,
        address TEXT,
        phone VARCHAR(15),
        gender VARCHAR(10),

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
    } catch (error) {
        console.log(error);
    }
}

