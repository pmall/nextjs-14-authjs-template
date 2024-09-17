"use server";

import { redirect } from "next/navigation";

import { z } from "zod";
import { signIn, signOut } from ".";
import { urls } from "./config";

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
    redirectTo: urls.protected,
  });

  redirect(`${urls.verify}?email=${email}`);
};

export const providerSignInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: urls.protected });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: urls.home });
};
