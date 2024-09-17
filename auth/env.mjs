import { z } from "zod";
import { config } from "dotenv";
import { createEnv } from "@t3-oss/env-nextjs";

config({ path: "../.env.local" });

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(44),
    EMAIL_SERVER: z.string().min(1),
    AUTH_GOOGLE_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
  },
});
