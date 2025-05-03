import { Button } from "@/components/ui/button";
import { login } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Register() {
  const action = async () => {
    "use server";

        const email = "diogo@dotme.com";
        const password = "password";

    await login(email, password);

    redirect("/");
  };

  return (
    <form action={action}>
      <Button type="submit">Login</Button>
    </form>
  );
}
