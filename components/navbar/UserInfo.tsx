import Link from "next/link";
import profile from "@/public/profile_icon.png"
import Image from "next/image";
import { auth } from "@/auth";
import LogOut from "./LogOut";


export default async function UserInfo() {

    const session = await auth()

    if (!session?.user) {
        return (
            <Link
                className="text-[20px] border-[1px] border-tomato py-3 px-5 rounded-full hover:bg-[#fff4f2] transition duration-300"
                href="/login"
            >
                Sign In
            </Link>
        );
    }

    return (
        <div className="flex-center gap-x-3">

            {session?.user?.provider === "credentials" ? (
                
                <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full cursor-pointer"
                />
            ) : (
                <Image
                    src={session?.user?.photo as string}
                    alt="profile"
                    width={35}
                    height={35}
                    className="rounded-full cursor-pointer"
                />
            )}

            <LogOut />

        </div>
    )
}