import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import Form from "next/form";
import { login } from "@/app/(authentication)/actions/auth";

export default function ProvidersForm() {
    return (
        <Form action={login} className="flex-center space-x-4">

            <Button 
                size="icon" 
                variant="outline" 
                className="flex-center w-1/2 p-2 border rounded-md"
                type="submit" 
                name="action" 
                value="google"
            >
                <FcGoogle />Google
            </Button>

            <Button 
                size="icon" 
                variant="outline" 
                className="flex-center w-1/2 p-2 border rounded-md"
                type="submit" 
                name="action" 
                value="github"
            >
                <FaGithub />GitHub
            </Button>

        </Form>
    )
}