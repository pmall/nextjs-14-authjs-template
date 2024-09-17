import { redirect } from "next/navigation";

import { auth } from "@/auth";
import LogoutForm from "@/components/LogoutForm";

export default async function Dashboard() {
  const session = await auth();

  if (session === null) {
    redirect("/");
  }

  return (
    <div className="max-w-96 mx-auto">
      <h1>Welcome to the dashboard</h1>
      <LogoutForm />
    </div>
  );
}
