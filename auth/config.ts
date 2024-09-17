import { DrizzleAdapter } from "@auth/drizzle-adapter";

import db from "@/db/client";
import {
  usersTable,
  accountsTable,
  sessionsTable,
  verificationTokensTable,
} from "@/db/auth";

export const adapter = DrizzleAdapter(db, {
  usersTable,
  accountsTable,
  sessionsTable,
  verificationTokensTable,
});

export const urls = {
  home: "/",
  signIn: "/login",
  verify: "/verify",
  protected: "/dashboard",
};
