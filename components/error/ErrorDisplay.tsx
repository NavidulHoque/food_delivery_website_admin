import { Button } from "../ui/button"

const ErrorDisplay = ({ message, reset }: { message: string, reset: () => void }) => {
    return (
        <section className="h-[82vh] flex-center flex-col m-4">

            <h2 className="text-40-medium my-2 text-tomato">{message}</h2>

            <Button
                className="bg-orange-400 text-20-normal-white p-1 rounded my-2"
                onClick={() => reset()}
            >
                Retry
            </Button>

        </section>
    )
}

export default ErrorDisplay