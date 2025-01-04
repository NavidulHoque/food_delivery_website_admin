import ProvidersForm from "@/components/authentication/ProvidersForm";
import ShowHeading from "@/components/authentication/ShowHeading";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex-center min-h-screen">

      <div className='sm:w-full sm:max-w-md w-[90vw] bg-white shadow-lg rounded-lg p-8 flex-column gap-y-6'>

        <ShowHeading />

        <ProvidersForm />

        <p className='text-slate-500 text-[18px] text-center'>or</p>

        {/* Credentials Form */}
        {children}

      </div>


    </main>
  )
}
