"use client";

import { Food } from "@/lib/type"; 
import { useToast } from "@/hooks/use-toast";
import { url } from "@/url";
import axios from "axios";
import { X } from "lucide-react";

export default function Remove({
    id,
    setFoods,
    isDisabled,
    setIsDisabled
}: {
    id: string;
    setFoods: React.Dispatch<React.SetStateAction<Food[]>>;
    isDisabled: boolean;
    setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {

    const { toast } = useToast();

    const removeFood = async () => {

        setIsDisabled(true)

        try {

            const response = await axios.delete(url + `/food/${id}`)

            if (response.data.status) {

                setFoods(prevFoods => {
                    return prevFoods.filter(prevFood => prevFood._id !== id)
                })

                setIsDisabled(false)

                toast({
                    variant: "success",
                    title: response.data.message,
                });
            } 

            else {
                throw new Error(response.data.message);
            }
        } 

        catch (error) {

            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred";

            toast({
                variant: "error",
                title: errorMessage,
            });
        }
    };

    return <X onClick={() => !isDisabled ? removeFood() : ""} className={`${!isDisabled ? "cursor-pointer" : ""}`} />
}
