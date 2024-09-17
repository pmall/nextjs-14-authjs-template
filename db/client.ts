import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "../env.mjs";

const cnx = postgres(env.DATABASE_URL);

const db = drizzle(cnx);

export default db;
