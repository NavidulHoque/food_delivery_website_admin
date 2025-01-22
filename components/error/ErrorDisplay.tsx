import Retry from "./Retry"

const ErrorDisplay = ({ message, reset }: {message: string, reset: () => void}) => {
    return (
        <section className="h-[82vh] flex-center flex-col m-4">

            <h2 className="text-40-medium my-2 text-tomato">{message}</h2>

            <Retry reset={reset} />

        </section>
    )
}

export default ErrorDisplay