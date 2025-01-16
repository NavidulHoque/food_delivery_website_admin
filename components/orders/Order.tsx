import { OrderObj } from "@/lib/type"
import parcel from "@/public/parcel_icon.png"
import Image from "next/image"
import Status from "./Status"

export default function Order({ order }: { order: OrderObj }) {

    const items = order.foodItems.reduce((acc, cur) => acc += Number(cur.quantity), 0)

    return (
        <div className="grid grid-cols-[0.5fr_3fr_2.4fr] items-center w-full border-tomato border-2 p-4">

            <Image src={parcel} alt="parcel" className="self-start" />

            <div className="text-[#454545] font-medium space-y-8">

                <p>
                    {order.foodItems.map((food, i, array) => (
                        <span key={food._id}>{food.name} x {food.quantity}{array.length !== i + 1 && ","} </span>
                    ))}
                </p>

                <p className="flex-column">
                    <span>{order.customerDetails.name}</span>
                    <span>{order.customerDetails.address}</span>
                    <span>{order.customerDetails.phone}</span>
                </p>

            </div>

            <div className="grid grid-cols-[0.6fr_0.6fr_1.2fr] self-start">

                <p className="text-[#454545]">${order.totalPrice}</p>

                <p className="text-[#454545]">Items: {items}</p>

                <p className="text-[#454545]">

                    <Status status={order.status} id={order.id} />

                </p>

            </div>

        </div>
    )
}
