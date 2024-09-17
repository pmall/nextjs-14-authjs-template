import { SignedOut } from "./SignedOut";
import { EmailSignInForm } from "./EmailSignInForm";
import { ProviderSignInForm } from "./ProviderSignInForm";

export function SignInForm() {
  return (
    <SignedOut>
      <div className="flex flex-col gap-4 max-w-96 mx-auto">
        <h1>Login</h1>
        <EmailSignInForm>Login with email</EmailSignInForm>
        <hr />
        <div className="flex flex-col gap-2">
          <ProviderSignInForm provider="google">
            Login with Google
          </ProviderSignInForm>
          <ProviderSignInForm provider="github">
            Login with Github
          </ProviderSignInForm>
        </div>
      </div>
    </SignedOut>
  );
}
