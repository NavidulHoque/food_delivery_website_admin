"use client";

import { deleteFoodBackend } from "@/app/(root)/actions/food";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { useState } from "react";

export default function Remove({ id }: { id: string; }) {

    const { toast } = useToast();
    const [pending, setPending] = useState(false)

    const removeFood = async () => {

        setPending(true)

        try {

            const data = await deleteFoodBackend(id)

            if (data.status) {

                toast({
                    variant: "success",
                    title: data.message,
                })

                setPending(false)
            }
        }

        catch (error) {
            console.error(error);
        }
    };

    return <X onClick={removeFood} className={`${pending ? "opacity-50" : "cursor-pointer"}`} />
}
