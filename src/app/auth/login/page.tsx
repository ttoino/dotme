import { login, register } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Register() {
    const action = async (formData: FormData) => {
        "use server"

        const email = "email@test.com";
        const password = "password";

        await login(email, password);

        redirect("/");
    }

    return <form action={action}>
        <button>Login</button>
    {/* TODO */}
    </form>
}