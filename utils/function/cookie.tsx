'use server';
import { cookies } from "next/headers";

export const getCookie = async (cname: string) => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(cname);
    return cookie;
};

export const setCookie = async (cname: string, value: any, expires: number) => {
    const cookieStore = await cookies();
    const date = new Date();
    date.setTime(date.getTime() + (expires*24*60*60*1000));
    cookieStore.set(cname, value, {expires: date});
};

export const deleteCookie = async (cname: string) => {
    (await cookies()).delete(cname);
};
