import { SignedIn } from "@/auth/components/SignedIn";
import { SignOutForm } from "@/auth/components/SignOutForm";

export default function Dashboard() {
  return (
    <SignedIn>
      <div className="max-w-96 mx-auto">
        <h1>Welcome to the dashboard</h1>
        <SignOutForm>Logout</SignOutForm>
      </div>
    </SignedIn>
  );
}
