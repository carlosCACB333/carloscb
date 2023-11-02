
"use server"
import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string) => {
    cookies().set(name, value, {
        path: "/",
    });
}
