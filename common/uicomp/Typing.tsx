"use client";
import React, { useEffect, useState } from "react";

type Props = {
    text: string;
    className?: string;
    delay: number;
};

export default function Typing({ text, delay, className }: Props) {
    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay/currentIndex);

            return () => clearTimeout(timeout);
        }
        if (currentText === text) {
            setTimeout(() => {
                setCurrentText("");
                setCurrentIndex(0);
            },2000);
        }
    }, [currentIndex, delay, text]);

    return <div className={className}>{currentText}</div>;
}
