import Remove from "@/components/list/Remove";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { url } from "@/url"
import axios from "axios"
import Image from "next/image";

interface Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default async function FoodList() {

  const { data: { foods } } = await axios.get(url + "/food/readFoods");

  return (
    <section className="col-span-6 space-y-4 p-10">

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
                  alt="image"
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

    </section>
  )
}
