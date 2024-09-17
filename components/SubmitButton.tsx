"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button className="border p-2 w-full" disabled={pending}>
      {children}
    </button>
  );
}
