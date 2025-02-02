"use client"

import { usePathname } from 'next/navigation';
import Heading from './Heading';

export default function ShowHeading() {
    const pathname = usePathname();

    const heading = (pathname === "/registration") ? (
        <Heading title="Create your account" description="Please fill in the details to get started." />
    ) : (
        <Heading title="Sign in to Tomato" description="Welcome back! Please sign in to continue" />
    )

    return heading
}
