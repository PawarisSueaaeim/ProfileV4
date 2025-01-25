import React from "react";
import { IoMdMenu } from "react-icons/io";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="flex justify-between items-center bg-COLOR_SECONDARY p-2 dark:text-DARK_WHITE dark:bg-DARK_GRAY">
            <div className="flex flex-col">
                <span className="font-semibold">Pawaris</span>
                <span className="flex justify-end text-[8px]">Rabeab</span>
            </div>
            <div></div>
            <div><IoMdMenu/></div>
            <div className="fixed h-screen bg-COLOR_SECONDARY dark:bg-DARK_GRAY">

            </div>
        </div>
    );
}
