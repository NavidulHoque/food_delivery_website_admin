"use client"

import { useToast } from '@/hooks/use-toast'
import { url } from '@/url'
import axios from 'axios'
import { X } from 'lucide-react'

export default function Remove({ id }: { id: string }) {

    const { toast } = useToast()

    const removeFood = async () => {

        try {
            const response = await axios.delete(url + `/food/${id}`)

            if (response.data.status) {

                toast({
                    variant: "success",
                    title: response.data.message
                })
            }

            else {
                throw new Error(response.data.message);
            }
        }

        catch (error) {

            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

            toast({
                variant: "error",
                title: errorMessage
            })
        }
    }

    return <X onClick={removeFood} className='cursor-pointer' />
}
