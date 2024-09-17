import { SignedOut } from "./SignedOut";
import { EmailSignInForm } from "./EmailSignInForm";
import { GoogleSignInForm } from "./GoogleSignInForm";
import { GithubSignInForm } from "./GithubSignInForm.tsx";

export async function SignUpForm() {
  return (
    <SignedOut>
      <div className="flex flex-col gap-4 max-w-96 mx-auto">
        <h1>Sign up</h1>
        <EmailSignInForm>Signup with email</EmailSignInForm>
        <hr />
        <div className="flex flex-col gap-2">
          <GoogleSignInForm>Signup with Google</GoogleSignInForm>
          <GithubSignInForm>Signup with Github</GithubSignInForm>
        </div>
      </div>
    </SignedOut>
  );
}
