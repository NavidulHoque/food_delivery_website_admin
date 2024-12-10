"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import Link from "next/link"
import axios from "axios"
import { url } from "@/url"

const formSchema = z.object({

  foodName: z.string().min(1, "Food name is required"),

  price: z.string().min(1, "Price is required"),

  description: z.string().min(1, "Description is required"),

  category: z.string().min(1, "Category is required")
})

export default function AddFood() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: "",
      description: "",
      category: ""
    },
  })

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {

  }

  return (
    <section className="col-span-6 space-y-4 p-10">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="foodName"
            render={({ field }) => (

              <FormItem>

                <FormLabel>Product Name</FormLabel>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="product name"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Product Description</FormLabel>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="product description"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <div className="flex items-center gap-x-2">

            <Select>

              <SelectTrigger className="w-[180px]">

                <SelectValue placeholder="Select a category" />

              </SelectTrigger>

              <SelectContent>

                <SelectGroup>

                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="salad">Salad</SelectItem>
                  <SelectItem value="rolls">Rolls</SelectItem>
                  <SelectItem value="deserts">Deserts</SelectItem>
                  <SelectItem value="sandwich">Sandwich</SelectItem>
                  <SelectItem value="cake">Cake</SelectItem>
                  <SelectItem value="pure Veg">Pure Veg</SelectItem>
                  <SelectItem value="pasta">Pasta</SelectItem>
                  <SelectItem value="noodles">Noodles</SelectItem>

                </SelectGroup>

              </SelectContent>

            </Select>

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (

                <FormItem>

                  <FormLabel className="text-lg">Product Price</FormLabel>

                  <FormControl>

                    <Input
                      type="number"
                      placeholder="$20"
                      disabled={isSubmitting}
                      className="w-[50%]"
                      {...field}
                    />

                  </FormControl>

                  <FormMessage />

                </FormItem>
              )}
            />

          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            Add
          </Button>



        </form>

      </Form>

    </section>
  )
}
