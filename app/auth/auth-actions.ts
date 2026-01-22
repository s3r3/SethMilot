"use server";
import { createClient } from "./server";
import { redirect } from "next/navigation";

// LOGIKA LOGIN
export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = (formData.get("email") ?? "") as string;
  const password = (formData.get("password") ?? "") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return { error: error.message };

  redirect("/app/home"); // Arahkan jika berhasil
}

// LOGIKA CREATE ACCOUNT
export async function signup(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: (formData.get("email") ?? "") as string,
    password: "password_default_atau_input", // Sesuaikan dengan form Anda
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) return { error: error.message };

  return { message: "Check your email for confirmation!" };
}

// LOGIKA FORGOT PASSWORD
export async function resetPassword(formData: FormData) {
  const supabase = await createClient();
  const email = (formData.get("email") ?? "") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
  });

  if (error) return { error: error.message };

  return { message: "Password reset link sent!" };
}
