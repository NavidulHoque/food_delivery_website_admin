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
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"
import { registration } from "../actions/auth"


const formSchema = z.object({

  username: z.string()
    .min(1, "Username is required")
    .min(4, { message: "Username must be at least 4 characters" })
    .max(10, { message: "Username cannot exceed 10 characters" })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Username can only contain alphanumeric characters (no special characters or spaces allowed)." }),

  email: z.string().min(1, "Email is required").email({ message: "Invalid email address" }),

  password: z.string()
    .min(1, "Password is required")
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, { message: "Password must contain at least one number and one special character" })
})


export default function Registration() {

  const router = useRouter();
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {

      const data = await registration(values)

      if (data.status) {

        toast({
          variant: "success",
          description: data.message
        })

        form.reset();

        const timeOutID = setTimeout(() => {
          router.push("/login")
        }, 1000)

        return () => clearTimeout(timeOutID)
      }

      else {
        throw new Error(data.message)
      }
    }

    catch (error) {

      if (error instanceof Error) {

        toast({
          variant: "error",
          description: error.message
        })
      }
    }
  }

  return (
    <div className="space-y-4">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Username</FormLabel>

                <FormControl>

                  <Input
                    type="text"
                    placeholder="Enter your name"
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
            name="email"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Email</FormLabel>

                <FormControl>

                  <Input
                    type="email"
                    placeholder="Enter your email"
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
            name="password"
            render={({ field }) => (

              <FormItem>

                <FormLabel className="text-lg">Password</FormLabel>

                <FormControl>

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            Register
          </Button>

        </form>

      </Form>

      <p className="space-x-1">
        <span>Already have an account?</span>
        <Link href="/login" className="text-tomato underline">Signin</Link>
      </p>

    </div>
  )
}