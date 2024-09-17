"use server";

import { redirect } from "next/navigation";

import { z } from "zod";
import { signIn, signOut, redirects } from ".";

const emailSchema = z.object({
  email: z.string().email(),
});

export const emailSignInAction = async (_: any, formData: FormData) => {
  const result = emailSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return result.error.flatten().fieldErrors.email;
  }

  const email = result.data.email;

  await signIn("nodemailer", {
    email,
    redirect: false,
    redirectTo: redirects.protected,
  });

  redirect(`${redirects.verify}?email=${email}`);
};

export const providerSignInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: redirects.protected });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: redirects.home });
};
