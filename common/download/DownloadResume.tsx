"use client";
import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

type Props = {};

export default function DownloadResume({}: Props) {
    return (
        <div className="flex items-center rounded-lg bg-COLOR_PRIMARY text-COLOR_QUATERNARY dark:bg-DARK_BLACK p-2 gap-2 hover:opacity-80 hover:scale-105 duration-200">
            <HiOutlineDocumentDownload className="w-8 h-8" />
            <a
                href="/documents/PawarisResume.pdf"
                onClick={() => {}}
                download
            >Download Resume</a>
        </div>
    );
}
