"use server";

import { redirect } from "next/navigation";
import { createUser, loginUser, updateFavourite } from "../DB/queries";
import { revalidatePath } from "next/cache";

export const registerUser = async (formData) => {
  const data = Object.fromEntries(formData);

  try {
    const userCreated = await createUser(data);
    if (userCreated) {
      redirect("/login");
    }
  } catch (err) {
    throw err;
  }
};

export const performLogin = (formData) => {
  try {
    return loginUser(Object.fromEntries(formData));
  } catch (err) {
    throw err;
  }
};

export const addFavourite = async (recipeId, userId) => {
  try {
    await updateFavourite(recipeId, userId);
  } catch (err) {
    throw err;
  }
  revalidatePath("/");
};
