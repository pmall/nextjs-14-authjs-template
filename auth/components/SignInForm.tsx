import { SignedOut } from "./SignedOut";
import { EmailSignInForm } from "./EmailSignInForm";
import { GoogleSignInForm } from "./GoogleSignInForm";
import { GithubSignInForm } from "./GithubSignInForm.tsx";

export function SignInForm() {
  return (
    <SignedOut>
      <div className="flex flex-col gap-4 max-w-96 mx-auto">
        <h1>Login</h1>
        <EmailSignInForm>Login with email</EmailSignInForm>
        <hr />
        <div className="flex flex-col gap-2">
          <GoogleSignInForm>Login with Google</GoogleSignInForm>
          <GithubSignInForm>Login with Github</GithubSignInForm>
        </div>
      </div>
    </SignedOut>
  );
}
