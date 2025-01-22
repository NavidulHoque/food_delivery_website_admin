"use server"

import { url } from "@/url"
import axios from "axios"
import { revalidatePath } from "next/cache"

export async function createFood({ name, price, description }: { name: string, price: string, description: string }, imageURL: string, category: string) {

    const response = await axios.post(url + "/food/createFood/admin", {
        name,
        image: imageURL,
        price,
        description,
        category
    })

    return response.data
}

export async function fetchFoods() {

    const { data: { foods } } = await axios.get(url + "/food/readFoods")

    return foods
}

export async function deleteFoodBackend(id: string) {

    const response = await axios.delete(url + `/food/${id}/admin`)

    revalidatePath("/list")

    return response.data
}