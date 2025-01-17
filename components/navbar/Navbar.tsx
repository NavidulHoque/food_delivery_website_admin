import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from "next/link";
import UserInfo from "./UserInfo";

export default function Navbar() {
  return (
    <nav className="col-span-full flex-between py-4 px-16 border-b-2 border-[#a9a9a9]">

      <Link href="/">

        <Image
          src={Logo}
          alt="logo"
          quality={100}
          width={120}
          height={100}
          className="cursor-pointer"
        />
        
      </Link>

      <UserInfo />

    </nav>
  )
}
