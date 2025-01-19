import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>

            <Navbar />

            <section className="grid grid-cols-12 min-h-[90.5vh]">

                <Sidebar />
                {children}

            </section>

        </main>
    )
}
