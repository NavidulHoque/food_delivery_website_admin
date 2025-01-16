"use client"

import { updateStatus } from "@/app/(root)/actions/status";
import { useState } from "react"

interface Props{
    status: string;
    id: string;
}

export default function Status(props: Props) {

    const [status, setStatus] = useState(props.status)

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)

        await updateStatus(props.id, e.target.value)
    }
    
    return (
        <select
            value={status}
            onChange={handleChange}
            className="bg-tomato/30 block w-full px-3 py-2 border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tomato focus:border-tomato"
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            <option value="Food is processing">Food is processing</option>
            <option value="Delivery is on the way">Delivery is on the way</option>
            <option value="Delivered">Delivered</option>

        </select>
    )
}
