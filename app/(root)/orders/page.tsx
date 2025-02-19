import { url } from "@/url"
import axios from "axios"
import { OrderObj } from "@/lib/type"
import Order from "@/components/orders/Order"
import RealTimeCommunication from "@/components/orders/RealTimeCommunication"

export const dynamic = "force-dynamic";

export default async function Orders() {

  const { data: { orders } } = await axios.get(url + '/order/allOrders/admin')

  return (
    <>
      <RealTimeCommunication />
      <section className="grid-column_pages space-y-8 sm:p-10 p-4">

        {orders.length === 0 ? (

          <div className="flex-center">
            <h1 className="text-tomato text-36-semibold">No orders to show</h1>
          </div>

        ) : (

          <>
            <h1 className="text-28-semibold text-[#454545]">My Orders</h1>

            {orders.map((order: OrderObj) => (
              <Order key={order.id} order={order} />
            ))}
          </>
          
        )}



      </section>
    </>
  )
}
