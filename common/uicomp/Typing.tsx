"use client";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
    text: string;
    className?: string;
    delay: number;
};

export default function Typing({ text, delay, className }: Props) {
    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { language } = useSelector(
        (state: RootState) => state.onChangeMultiLanguageSlice
    );

    const handleResetCurrentText = () => {
        setCurrentText("");
        setCurrentIndex(0);
    };

    useEffect(() => {
        handleResetCurrentText();
    }, [language, text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay / currentIndex);

            return () => clearTimeout(timeout);
        }
        if (currentText === text) {
            setTimeout(() => {
                handleResetCurrentText();
            }, 2000);
        }
    }, [currentIndex, delay, text, language]);

    return <div className={className}>{currentText}</div>;
}
