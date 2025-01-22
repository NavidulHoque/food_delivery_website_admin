import Heading from "@/components/notFound/Heading";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="not-found_main-section">

            <Heading />
            <Link 
                href="/add" 
                className='bg-tomato hover:bg-tomato/90 text-white px-4 py-2 rounded-md'
            >
                Return to Add Food Page
            </Link>

        </section>
    )
}
