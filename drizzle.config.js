import { defineConfig } from "drizzle-kit";
import { env } from "./env.mjs";

export default defineConfig({
  dialect: "postgresql",
  schema: ["./db/schema.ts", "./auth/schema.ts"],
  out: "./db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
