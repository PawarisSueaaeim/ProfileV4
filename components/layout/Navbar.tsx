import React from "react";
import MultiLanguage from "./MultiLanguage";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

export type tNavbarDatas = {
    id: string;
    title: string;
    path: string;
};

type Props = {};

export default function Navbar({}: Props) {
    const navbarDatas: tNavbarDatas[] = [
        { id: "001", title: "About", path: "/about" },
        // { id: "002", title: "Contact", path: "/contact" },
        { id: "003", title: "Experience", path: "/experience" },
    ];

    return (
        <div className="fixed w-full text-COLOR_PRIMARY bg-white dark:bg-DARK_BLACK p-2 duration-300 z-[98] shadow-2xl">
            <div className="flex justify-between items-center">
                <Link className="flex active:scale-90 duration-150" href="/">
                    <span className="font-semibold">PAWARIS</span>
                    <span className="flex justify-end text-[8px]">Rab.</span>
                </Link>
                <div className="hidden md:flex gap-8">
                    {navbarDatas.map((item, index) => {
                        return (
                            <Link
                                key={`${item.id}-${item.title}-${index}`}
                                className="hover:cursor-pointer hover:opacity-40 duration-150 active:scale-90"
                                href={item.path}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center justify-center gap-2">
                    <MobileNavbar navbarDatas={navbarDatas} />
                    <MultiLanguage />
                </div>
            </div>
        </div>
    );
}
