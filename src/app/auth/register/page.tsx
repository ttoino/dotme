import { register } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Register() {
    const action = async (formData: FormData) => {
        "use server"

        const name = "Test User";
        const email = "email@test.com";
        const password = "password";

        await register(name, email, password);

        redirect("/");
    }

    return <form action={action}>
        <button>Register</button>
    {/* TODO */}
    </form>
}