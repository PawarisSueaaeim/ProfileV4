"use client";
import React from "react";
import { setIsDarkMode } from "@/lib/feature/darkmode/onChangeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { RootState } from "@/lib/store";

type Props = { children: React.ReactNode };

export default function ThemeProvider({ children }: Props) {
    const dispatch = useDispatch();

    const { isDarkMode } = useSelector((state: RootState) => state.onChangeSlice);

    const handleOnChange = () => {
        dispatch(setIsDarkMode({}));
    };

    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            {children}
            <div className="fixed bottom-10 right-10 bg-DARK_GREEN dark:bg-COLOR_PRIMARY p-4 rounded-full hover:scale-150 duration-300 shadow-2xl">
                <button className="flex justify-center items-center">
                    {isDarkMode ? (
                        <FaRegMoon
                            onClick={() => handleOnChange()}
                            className="text-yellow-400"
                        />
                    ) : (
                        <FiSun
                            onClick={() => handleOnChange()}
                            className="text-orange-400"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
