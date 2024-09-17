"use client";

import { googleSignInAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function GoogleSignInForm({ children }: { children: React.ReactNode }) {
  return (
    <form action={googleSignInAction}>
      <SubmitButton>{children}</SubmitButton>
    </form>
  );
}
