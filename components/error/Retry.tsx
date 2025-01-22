"use client"

import { Button } from "../ui/button"

export default function Retry({reset}: {reset: () => void}) {
    return (
        <Button
            className="bg-orange-400 text-20-normal-white p-1 rounded my-2"
            onClick={() => reset()}
        >
            Retry
        </Button>
    )
}