'use server'

import { signIn, signOut } from "@/auth";

export async function login(formData: FormData) {
  const action = formData.get('action') as string
  await signIn(action, { redirectTo: "/" });
}

export async function logout() {
  await signOut({ redirectTo: "/" })
}


export async function credentialLogin({email, password}: {email: string, password: string}) {

  await signIn("credentials", {email, password, redirect: false})
}