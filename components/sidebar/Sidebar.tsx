"use client"

import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { usePathname  } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <section className="col-span-1 border-r-2 border-[#a9a9a9]">

      <div className="flex-column gap-y-8 pt-10">

        <Link href="/add" className={`sidebar-items ${pathname === "/add" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <IoIosAddCircleOutline className="size-10 mx-1" />

          <span className="text-[20px]">Add Items</span>

        </Link>

        <Link href="/list" className={`sidebar-items ${pathname === "/list" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <FaListUl className="size-8 mx-2" />

          <span className="text-[20px]">Food List</span>

        </Link>

        <Link href="/orders" className={`sidebar-items ${pathname === "/orders" ? "bg-[#fff0ed] border-tomato" : "border-[#a9a9a9]"}`}>

          <FaListUl className="size-8 mx-2" />

          <span className="text-[20px]">Orders</span>

        </Link>

      </div>

    </section>
  )
}
