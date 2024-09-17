"use client";

import { signOutAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export default function LogoutForm() {
  return (
    <form action={signOutAction}>
      <SubmitButton>Logout</SubmitButton>
    </form>
  );
}
