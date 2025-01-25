import React from "react";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="flex justify-between bg-COLOR_SECONDARY p-2 dark:text-DARK_WHITE dark:bg-DARK_GRAY">
            <div className="flex flex-col">
                <span className="font-semibold">Pawaris</span>
                <span className="flex justify-end text-[8px]">Rabeab</span>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
