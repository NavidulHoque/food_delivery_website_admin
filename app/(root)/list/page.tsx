import Remove from "@/components/list/Remove";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Food } from "@/lib/type";
import Image from "next/image";
import { fetchFoods } from "../actions/food";

export const dynamic = "force-dynamic";

export default async function FoodList() {

  const foods = await fetchFoods()

  return (
    <section className="grid-column_pages space-y-4 sm:p-10 p-4">

      {foods.length === 0 ? (

        <div className="flex-center">
          <p className="flex-center text-[20px]">Loading...</p>
        </div>

      ) : (
        <>
          <h2 className="text-[#6d6d6d]">All Foods List</h2>

          <Table className="border-[2px]">

            <TableHeader>

              <TableRow>

                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead className="text-left">Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Remove</TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {foods.map((food: Food) => (

                <TableRow key={food._id}>

                  <TableCell>

                    <Image
                      src={food.image}
                      alt={food.name}
                      width={100}
                      height={100}
                    />

                  </TableCell>

                  <TableCell>{food.name}</TableCell>
                  <TableCell>{food.category}</TableCell>
                  <TableCell>{food.price}</TableCell>
                  <TableCell><Remove id={food._id} /></TableCell>

                </TableRow>
              ))}

            </TableBody>

          </Table>
        </>
      )}

    </section>
  )
}
