'use server'

import { signIn } from "@/auth";
import { url } from "@/url";
import axios from "axios";

export async function login(formData: FormData) {
  const action = formData.get('action') as string
  await signIn(action, { redirectTo: "/" });
}

export async function registration({username, email, password}: {username: string, email: string, password: string}){

  const {data} = await axios.post(url + "/auth/registration", {
    username,
    email,
    password,
    provider: "credentials",
    role: "admin"
  })

  return data
}

