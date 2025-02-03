"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { tNavbarDatas } from "./Navbar";
import Link from "next/link";

type Props = {
    navbarDatas: tNavbarDatas[];
};

export default function MobileNavbar({ navbarDatas }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="md:hidden">
            <IoMdMenu onClick={() => setIsOpen(!isOpen)} />
            <div
                className={`fixed ${isOpen ? 'right-0 top-0 duration-300' : 'right-[-100%] duration-300' } text-white min-h-screen w-40 bg-COLOR_PRIMARY dark:bg-DARK_BLACK z-[99]`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="relative flex flex-col justify-center gap-4 py-4 px-2">
                    <FaArrowRightLong/>
                    {navbarDatas.map((item, index) => {
                        return (
                            <Link
                                key={`${item.id}-${item.title}-${index}`}
                                className="hover:cursor-pointer hover:opacity-40 px-6 duration-300"
                                href={item.path}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
