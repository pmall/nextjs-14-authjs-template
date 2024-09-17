import { redirect } from "next/navigation";

import { auth, redirects } from "..";

export async function SignedOut({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session !== null) {
    redirect(redirects.protected);
  }

  return <>{children}</>;
}
