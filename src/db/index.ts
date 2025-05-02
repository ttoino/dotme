import 'dotenv/config';
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";

let _db: ReturnType<typeof drizzle> | null = null;

const db = () => _db ?? (_db = drizzle(mysql.createPool(process.env.DATABASE_URL!)));

export default db;
