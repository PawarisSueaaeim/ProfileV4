import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="flex flex-col justify-between items-center pt-5 h-20 text-COLOR_PRIMARY bg-white dark:text-DARK_WHITE dark:bg-DARK_BLACK duration-300 shadow-2xl z-[9999]">
            <div className="flex gap-4 text-2xl">
                <a href="tel:0955799772" data-testid="tel">
                    <FaSquarePhone className="text-green-500 cursor-pointer hover:scale-125 duration-300" />
                </a>
                <a href="https://www.facebook.com/pawaris.rabeab" data-testid="facebook">
                    <FaFacebookSquare className="text-blue-600 cursor-pointer hover:scale-125 duration-300" />
                </a>
                <a href="https://www.instagram.com/pawaris_rabeab/" data-testid="instagram">
                    <FaInstagramSquare className="text-red-500 cursor-pointer hover:scale-125 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/pleum-pawaris-rabeab-234292253/" data-testid="linkedin">
                    <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-125 duration-300" />
                </a>
            </div>
            <span className="flex flex-end text-[0.5rem]">
                Create by Pawaris Rabeab | v0.0.2
            </span>
        </div>
    );
}
