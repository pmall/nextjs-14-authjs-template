"use server";

import { redirect } from "next/navigation";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { cookies } from "next/headers";

const emailSchema = z.object({
  email: z.string().email(),
});

export const emailSignInAction = async (_: any, formData: FormData) => {
  try {
    const { email } = emailSchema.parse(Object.fromEntries(formData));

    await signIn("nodemailer", {
      email,
      redirect: false,
      redirectTo: "/dashboard",
    });

    redirect(`/verify?email=${email}`);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return e.flatten().fieldErrors[0];
    }

    throw e;
  }
};

export const googleSignInAction = async () => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const githubSignInAction = async () => {
  await signIn("github", { redirectTo: "/dashboard" });
};

export const signOutAction = async () => {
  await signOut();
};
