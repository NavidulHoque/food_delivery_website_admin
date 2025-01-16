"use server"

import { url } from "@/url"
import axios from "axios"
import { revalidatePath } from "next/cache"

export async function updateStatus(id: string, status: string){

    await axios.put(url + "/order/update", {id, status})
    return
}

export async function revalidateOrderPage() {
    revalidatePath("/orders")
}