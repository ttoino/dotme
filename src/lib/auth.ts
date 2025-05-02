"use server";

import { User } from "@/types/user";
import { createUser, getUser } from "./user"
import { cookies } from "next/headers";

export const getSession = async (): Promise<User | null> => {
    const email = (await cookies()).get("email")?.value;

    if (!email) {
        return null;
    }

    return await getUser(email);
}

export const login = async (email: string, password: string): Promise<User | null> => {
    console.log("login", email, password);

    const user = await getUser(email);

    if (!user) {
        return null;
    }

    (await cookies()).set("email", email);

    return user;
}

export const register = async (name: string, email: string, password: string): Promise<User | null> => {
    console.log("register", name, email, password);

    const user = await getUser(email);

    if (user) {
        return null;
    }

    const newUser = await createUser({ email, name });

    (await cookies()).set("email", email);

    return newUser;
}

export const logout = async (): Promise<void> => {
    (await cookies()).delete("email");
};
