
import { cookies } from "next/headers";

// export const setCookie = (cname: string, cvalue: any, exdays: number) => {
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// };

// export const getCookie = (cname: string) => {
//     if (!document.cookie) return;
//     var nameEQ = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// };

// export const deleteCookie = (cname: string) => {
//     document.cookie = cname +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

// export const getCookie = (cname: string) => {

// };

export const setCookie = async (cname: string, value: any, expires: number) => {
    const cookieStore = await cookies();

    cookieStore.set({
        name: cname,
        value: value,
        expires: expires,
        path: "/",
    });
};

export const deleteCookie = async (cname: string) => {
    (await cookies()).delete(cname);
};
