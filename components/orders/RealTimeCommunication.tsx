"use client"

import { useEffect } from "react"
import socket from "@/socket";
import { revalidateOrderPage } from "@/app/(root)/actions/status";

export default function RealTimeCommunication() {

    useEffect(() => {

        const handleRevalidation = () => {
            revalidateOrderPage()
        }

        socket.on('orderCreated', handleRevalidation)

        return () => {
            socket.off("orderCreated", handleRevalidation)
        };
        
    }, [])
    
  return <></>
}
