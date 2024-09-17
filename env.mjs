import { z } from "zod";
import { config } from "dotenv";
import { createEnv } from "@t3-oss/env-nextjs";

config({ path: "./.env.local" });

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
  },
});
