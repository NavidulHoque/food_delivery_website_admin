export default function Heading({ title, description }: { title: string, description: string }) {
    return (
        <div className="space-y-3">

            <h2 className="text-3xl font-bold text-center">{title}</h2>

            <p className="text-center text-gray-500 text-[18px]">{description}</p>

        </div>
    )
}