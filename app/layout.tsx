import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ThemeProvider";
import { cookies } from "next/headers";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const noto_sans_thai = Noto_Sans_Thai({
    subsets: ["thai"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Pawaris Web Site",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const storeCookie = await cookies();

    const message = await getMessages();
    return (
        <StoreProvider>
            <html lang={locale} suppressHydrationWarning>
                <NextIntlClientProvider messages={message}>
                    <body
                        className={`${
                            locale === "en"
                                ? inter.className
                                : noto_sans_thai.className
                        }`}
                    >
                        <ThemeProvider
                            theme={storeCookie.get('theme')}
                        >
                            <div className="min-h-screen bg-COLOR_PRIMARY dark:bg-DARK_BLACK">
                                <Navbar />
                                <div className="container">
                                    {children}
                                </div>
                            </div>
                        </ThemeProvider>
                    </body>
                </NextIntlClientProvider>
            </html>
        </StoreProvider>
    );
}
