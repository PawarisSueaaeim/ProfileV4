import ButtonPrimary from "@/common/button/ButtonPrimary";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import MultiLanguage from "./MultiLanguage";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="flex justify-between items-center bg-COLOR_PRIMARY dark:bg-DARK_BLACK p-2">
            <div className="flex">
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
