import 'dotenv/config';
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";

const client = mysql.createPool(process.env.DATABASE_URL!);
const db = drizzle({
    client,
    // casing: "snake_case",
});

export default db;
