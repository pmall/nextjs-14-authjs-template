import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/nodemailer";

import { env } from "./env.mjs";
import { adapter } from "./config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: adapter,
  providers: [
    Nodemailer({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
      sendVerificationRequest: ({ identifier, url }) => {
        console.log(identifier, url);
      },
    }),
    Google,
    Github,
  ],
});
