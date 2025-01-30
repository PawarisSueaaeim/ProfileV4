import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="flex flex-col justify-between items-center pt-5 h-20 text-COLOR_PRIMARY bg-COLOR_PRIMARY dark:text-DARK_WHITE dark:bg-DARK_BLACK duration-300">
            <div className="flex gap-4 text-2xl">
                <a href="tel:0955799772">
                    <FaSquarePhone className="text-green-500 cursor-pointer hover:scale-125 duration-300" />
                </a>
                <FaFacebookSquare className="text-blue-600 cursor-pointer hover:scale-125 duration-300" />
                <FaInstagramSquare className="text-red-500 cursor-pointer hover:scale-125 duration-300" />
                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-125 duration-300" />
            </div>
            <span className="flex flex-end text-[0.5rem] text-COLOR_QUATERNARY">
                Create by Pawaris Rabeab | v0.0.1
            </span>
        </div>
    );
}
