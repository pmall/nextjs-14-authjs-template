import { SignedOut } from "./SignedOut";
import { EmailSignInForm } from "./EmailSignInForm";
import { ProviderSignInForm } from "./ProviderSignInForm";

export async function SignUpForm() {
  return (
    <SignedOut>
      <div className="flex flex-col gap-4 max-w-96 mx-auto">
        <h1>Sign up</h1>
        <EmailSignInForm>Signup with email</EmailSignInForm>
        <hr />
        <div className="flex flex-col gap-2">
          <ProviderSignInForm provider="google">
            Signup with Google
          </ProviderSignInForm>
          <ProviderSignInForm provider="github">
            Signup with Github
          </ProviderSignInForm>
        </div>
      </div>
    </SignedOut>
  );
}
