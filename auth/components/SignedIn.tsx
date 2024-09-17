import { redirect } from "next/navigation";

import { auth, redirects } from "..";

export async function SignedIn({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session === null) {
    redirect(redirects.signIn);
  }

  return <>{children}</>;
}
