"use client";

import { signInAction } from "@/auth/actions";

export function LoginForm() {
  return (
    <form action={signInAction}>
      <button className="border p-2">Login</button>
    </form>
  );
}
