"use client"

import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { usePathname  } from "next/navigation";
import order from "@/public/order_icon.png"
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <section className="xl:col-span-2 min-[850px]:col-span-3 sm:col-span-4 col-span-3 border-r-2 border-[#a9a9a9]">

      <div className="flex-column gap-y-8 pt-10">

        <Link href="/add" className={`sidebar-items ${pathname === "/add" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <IoIosAddCircleOutline className="size-10 mx-1" />

          <span className="text-[20px] sm:inline-block hidden">Add Items</span>

        </Link>

        <Link href="/list" className={`sidebar-items ${pathname === "/list" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <FaListUl className="size-8 mx-2" />

          <span className="text-[20px] sm:inline-block hidden">Food List</span>

        </Link>

        <Link href="/orders" className={`sidebar-items ${pathname === "/orders" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <Image src={order} alt="order" className="size-8 mx-2" />

          <span className="text-[20px] sm:inline-block hidden">Orders</span>

        </Link>

      </div>

    </section>
  )
}
