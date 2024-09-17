"use client";

import { googleSignInAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function GoogleLoginForm() {
  return (
    <form action={googleSignInAction}>
      <SubmitButton>Login with Google</SubmitButton>
    </form>
  );
}
