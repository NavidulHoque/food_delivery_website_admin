"use server"

import axios from "axios"

export async function generateImageURL(formData: FormData): Promise<string> {

    const imageResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, formData)

    return imageResponse.data.data.url
}