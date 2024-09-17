"use client";

import { useFormState } from "react-dom";

import { emailSignInAction } from "@/auth/actions";
import { SubmitButton } from "./SubmitButton";

export function EmailSignInForm({ children }: { children: React.ReactNode }) {
  const [errors, action] = useFormState(emailSignInAction, undefined);

  return (
    <form action={action} className="flex flex-col gap-2">
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border p-2 w-full"
      />
      <SubmitButton>{children}</SubmitButton>
      {errors && (
        <ul>
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
