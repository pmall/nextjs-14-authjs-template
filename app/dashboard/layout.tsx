import { SignedIn } from "@/auth/components/SignedIn";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SignedIn>
      <SessionProvider>{children}</SessionProvider>
    </SignedIn>
  );
}
