import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from "next/link";

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


      <Link
        className="text-[20px] border-[1px] border-tomato py-3 px-5 rounded-full hover:bg-[#fff4f2] transition duration-300"
        href="/login"
      >
        Sign In
      </Link>

    </nav>
  )
}
