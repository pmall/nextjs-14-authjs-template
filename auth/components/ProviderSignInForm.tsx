"use client";

import { SubmitButton } from "./SubmitButton";
import { providerSignInAction } from "../actions";

export function ProviderSignInForm({
  provider,
  children,
}: {
  provider: string;
  children: React.ReactNode;
}) {
  const action = async () => providerSignInAction(provider);

  return (
    <form action={action}>
      <SubmitButton>{children}</SubmitButton>
    </form>
  );
}
