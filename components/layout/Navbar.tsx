import React from "react";
import { IoMdMenu } from "react-icons/io";
import MultiLanguage from "./MultiLanguage";
import MobileNavbar from "./MobileNavbar";

export type tNavbarDatas = {
    id: string;
    title: string;
    path: string;
};

type Props = {};

export default function Navbar({}: Props) {
    const navbarDatas: tNavbarDatas[] = [
        { id: "001", title: "About", path: "/about" },
        { id: "002", title: "Contact", path: "/contect" },
        { id: "003", title: "Experience", path: "/experience" },
    ];
    return (
        <div className="flex justify-between items-center bg-COLOR_PRIMARY dark:bg-DARK_BLACK p-2">
            <div className="flex">
                <span className="font-semibold">PAWARIS</span>
                <span className="flex justify-end text-[8px]">Rab.</span>
            </div>
            <div className="hidden md:flex gap-8">
                {navbarDatas.map((item, index) => {
                    return (
                        <div 
                            key={`${item.id}-${item.title}-${index}`}
                            className="hover:cursor-pointer hover:opacity-40 duration-500"
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center gap-2">
                <MobileNavbar navbarDatas={navbarDatas}/>
                <MultiLanguage />
            </div>
        </div>
    );
}
