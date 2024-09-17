"use client";

import { githubSignInAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function GithubSignInForm({ children }: { children: React.ReactNode }) {
  return (
    <form action={githubSignInAction}>
      <SubmitButton>{children}</SubmitButton>
    </form>
  );
}
