"use client";

import { signOutAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function SignOutForm({ children }: { children: React.ReactNode }) {
  return (
    <form action={signOutAction}>
      <SubmitButton>{children}</SubmitButton>
    </form>
  );
}
