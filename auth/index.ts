import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/nodemailer";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import db from "@/db/client";
import { env } from "./env.mjs";

import {
  usersTable,
  accountsTable,
  sessionsTable,
  verificationTokensTable,
} from "./schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db, {
    usersTable,
    accountsTable,
    sessionsTable,
    verificationTokensTable,
  }),
  providers: [
    Nodemailer({
      server: env.EMAIL_SERVER,
      sendVerificationRequest: ({ identifier, url }) => {
        console.log(identifier, url);
      },
    }),
    Google,
    Github,
  ],
});

export const redirects = {
  home: "/",
  signIn: "/login",
  verify: "/verify",
  protected: "/dashboard",
};
