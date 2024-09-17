import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { EmailLoginForm } from "@/components/EmailLoginForm";
import { GoogleLoginForm } from "@/components/GoogleLoginForm";
import { GithubLoginForm } from "@/components/GithubLoginForm.tsx";

export default async function Login() {
  const session = await auth();

  if (session !== null) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col gap-4 max-w-96 mx-auto">
      <h1>Login</h1>
      <EmailLoginForm />
      <hr />
      <div className="flex flex-col gap-2">
        <GoogleLoginForm />
        <GithubLoginForm />
      </div>
    </div>
  );
}
