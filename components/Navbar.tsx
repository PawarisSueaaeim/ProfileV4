import ButtonPrimary from "@/common/button/ButtonPrimary";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import MultiLanguage from "./MultiLanguage";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="flex justify-between items-center text-DARK_BLACK bg-COLOR_PRIMARY p-2 dark:text-DARK_WHITE dark:bg-DARK_BLACK">
            <div className="flex flex-col">
                <span className="font-semibold">PAWARIS</span>
                <span className="flex justify-end text-[8px]">Rab.</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div><IoMdMenu/></div>
                <MultiLanguage/>
            </div>
        </div>
    );
}
