import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ThemeProvider";
import { cookies } from "next/headers";
import { tTheme } from "@/utils/types/theme";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const noto_sans_thai = Noto_Sans_Thai({
    subsets: ["thai"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://google.com/"),
    title: {
        default: "Pawaris Web Site",
        template: "%s | Pawaris Web Site",
    },
    description: "Generated by create next app",
    keywords: "blog, pawaris rabeab, profile, developer,software engineer",
    openGraph: {
        title: "Pawaris Web Site",
        description: "Generated by create next app",
        type: "website",
        locale: "th",
        url: "",
        siteName: "",
    },
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
                            theme={
                                storeCookie.get("theme")
                                    ? (storeCookie.get("theme")
                                          ?.value as tTheme)
                                    : "dark"
                            }
                        >
                            <Navbar />
                            <div className="text-COLOR_PRIMARY bg-white dark:bg-DARK_GRAY dark:text-DARK_WHITE w-full duration-500">
                                {children}
                            </div>
                            <Footer />
                        </ThemeProvider>
                    </body>
                </NextIntlClientProvider>
            </html>
        </StoreProvider>
    );
}
