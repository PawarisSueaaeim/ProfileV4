"use client";
import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

type Props = {};

export default function DownloadResume({}: Props) {
    return (
        <div className="flex justify-between items-center rounded-full bg-COLOR_PRIMARY text-COLOR_QUATERNARY dark:bg-DARK_BLACK p-2 gap-2 hover:opacity-80 hover:scale-105 duration-200 shadow-2xl">
            <a className="flex justify-center items-center w-full" href="/documents/PawarisResume.pdf" onClick={() => {}} download>
                Download Resume
            </a>
            <div className="flex-end h-full w-auto bg-COLOR_TERTIARY dark:bg-DARK_GREEN rounded-full p-2">
                <HiOutlineDocumentDownload data-testid="download-icon" className="w-8 h-8 text-black dark:text-white" />
            </div>
        </div>
    );
}
