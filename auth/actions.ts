"use server";

import { signIn } from ".";

export const signInAction = async () => {
  await signIn();
};
