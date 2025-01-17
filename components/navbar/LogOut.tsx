"use client"

import Image from "next/image"
import { useState } from "react"
import logoutIcon from "@/public/logout_icon.png"
import { logout } from "@/app/(authentication)/actions/auth";

export default function LogOut() {

  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {

    setLoading(true)
    await logout()
  }

  return (
    <button
      className={`flex-center gap-x-2 bg-tomato/50 hover:bg-tomato/60 px-2 py-1 rounded-md cursor-pointer ${loading ? "opacity-80" : ""}`}
      onClick={handleLogout}
      disabled={loading}
    >
      <Image src={logoutIcon} alt="logout" />

      <span className="text-lg">Log Out</span>

    </button>
  )
}
