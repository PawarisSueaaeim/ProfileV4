"use client";
import React, { useEffect } from "react";
import { setIsDarkMode } from "@/lib/feature/darkmode/onChangeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { RootState } from "@/lib/store";
import { tTheme } from "@/utils/types/theme";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

type Props = {
    theme?: RequestCookie | undefined;
    children: React.ReactNode;
};

export default function ThemeProvider({ theme, children }: Props) {
    const dispatch = useDispatch();

    const { isDarkMode } = useSelector(
        (state: RootState) => state.onChangeSlice
    );

    const handleOnChange = (value: tTheme | RequestCookie | undefined) => {
        dispatch(setIsDarkMode({ value: value }));
    };

    useEffect(() => {
        if (theme) {
            handleOnChange(theme);
        }
    }, []);

    return (
        <div className={isDarkMode}>
            {children}
            <div className="fixed bottom-10 right-10 bg-DARK_GREEN dark:bg-COLOR_PRIMARY p-4 rounded-full hover:scale-150 duration-300 shadow-2xl">
                <button className="flex justify-center items-center">
                    {isDarkMode === 'light' ? (
                        <FaRegMoon
                            onClick={() => handleOnChange("dark")}
                            className="text-yellow-400"
                        />
                    ) : (
                        <FiSun
                            onClick={() => handleOnChange("light")}
                            className="text-orange-400"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
