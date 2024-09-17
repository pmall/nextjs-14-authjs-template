"use client";

import { githubSignInAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function GithubLoginForm() {
  return (
    <form action={githubSignInAction}>
      <SubmitButton>Login with Github</SubmitButton>
    </form>
  );
}
