"use client";
import { setLocale } from "@/lib/feature/multilanguage/onChangeLanguageSlice";
import { RootState } from "@/lib/store";
import { getCookieClient } from "@/utils/client/cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default function MultiLanguage({}: Props) {
    const optionLanguages = ["th", "en"];
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { language } = useSelector(
        (state: RootState) => state.onChangeMultiLanguageSlice
    );

    const handleOnClick = async (lang: string) => {
        dispatch(setLocale({ value: lang }));
        setIsOpen(false);
    };

    useEffect(() => {
        if (getCookieClient("i18next")) {
            const cookie = getCookieClient("i18next");
            handleOnClick(cookie);
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative">
                <div
                    className="px-2 py-1 text-DARK_GRAY bg-COLOR_TERTIARY dark:text-COLOR_QUATERNARY dark:bg-DARK_GRAY rounded-md cursor-pointer active:scale-95"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {language}
                </div>
                {isOpen && (
                    <div className="absolute text-DARK_GRAY bg-COLOR_SECONDARY dark:text-COLOR_QUATERNARY dark:bg-DARK_GRAY shadow-2xl rounded-md">
                        {optionLanguages.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="hover:bg-DARK_BLACK hover:text-COLOR_QUATERNARY px-2 py-1 rounded-md duration-500 cursor-pointer active:scale-95"
                                    onClick={() => handleOnClick(item)}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
