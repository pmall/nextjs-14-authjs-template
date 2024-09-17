import { redirect } from "next/navigation";

import { auth } from "..";
import { urls } from "../config";

export async function SignedOut({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session !== null) {
    redirect(urls.protected);
  }

  return <>{children}</>;
}
