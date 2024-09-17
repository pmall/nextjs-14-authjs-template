import { redirect } from "next/navigation";

import { auth } from "..";
import { urls } from "../config";

export async function SignedIn({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session === null) {
    redirect(urls.signIn);
  }

  return <>{children}</>;
}
