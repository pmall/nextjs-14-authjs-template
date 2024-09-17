"use client";

import { useSession } from "next-auth/react";

export default function Client() {
  const session = useSession();

  if (session.status === "authenticated") {
    return <pre>{JSON.stringify(session, null, 2)}</pre>;
  }

  return null;
}
