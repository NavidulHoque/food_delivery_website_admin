"use client"

import upload from "@/public/upload_area.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"

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
import Image from "next/image"
import { useRef, useState } from "react"
import axios from "axios"
import { url } from "@/url"

const formSchema = z.object({

  foodName: z.string().min(1, "Food name is required"),

  price: z.string().min(1, "Price is required"),

  description: z.string().min(1, "Description is required")
})

export default function AddFood() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [renderImage, setRenderImage] = useState<string>("")
  const [base64Image, setBase64Image] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: "",
      description: ""
    },
  })

  const { isSubmitting } = form.formState;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];
    const reader = new FileReader();

    if (file) {

      reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
          setBase64Image(reader.result.split(',')[1]) // Base64 encoded string
        }
      };

      reader.readAsDataURL(file);
      setRenderImage(URL.createObjectURL(file))
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {

    if (!renderImage && !base64Image) {

      toast({
        variant: "error",
        title: "Please enter an image"
      })
    }

    else if (!category) {

      toast({
        variant: "error",
        title: "Please enter an category"
      })
    }

    else {

      const formData = new FormData()
      formData.append('image', base64Image)

      try {

        const imageResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, formData)

        const { foodName, price, description } = values

        const mongoDBResponse = await axios.post(url + "/food/createFood", {
          name: foodName,
          image: imageResponse.data.data.url,
          price,
          description,
          category
        })

        if (mongoDBResponse.data.status) {

          toast({
            variant: "success",
            title: "Food saved"
          })

          form.reset();
          setRenderImage("")
          setBase64Image("")
          setCategory("")
        }

        else{
          throw new Error(mongoDBResponse.data.message)
        }
      }

      catch (error) {

        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

        toast({
          variant: "error",
          title: errorMessage
        })
      }
    }

  }

  return (
    <section className="col-span-6 space-y-8 p-10">

      <div className="flex-column gap-y-3">

        <p className="text-[20px]">Upload Image</p>

        <Image
          src={renderImage ? renderImage : upload}
          alt="upload"
          onClick={() => inputRef.current && inputRef.current.click()}
          className="cursor-pointer"
          width={120}
          height={70}
          quality={100}
        />

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isSubmitting}
          hidden
        />

      </div>

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

                <FormLabel>Product Description</FormLabel>

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

          <div className="flex gap-x-7">

            <div className="flex-column gap-y-2">

              <p className="text-lg leading-[25.6px]">Product Category</p>

              <Select
                value={category} 
                onValueChange={(e) => setCategory(e)}
                disabled={isSubmitting}
              >

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

            </div>

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (

                <FormItem>

                  <FormLabel>Product Price</FormLabel>

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
