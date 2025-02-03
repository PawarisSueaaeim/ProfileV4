import React from "react";

type Props = {
    className?: string;
    title: string;
    children: React.ReactNode;
};

export default function CardPrimary({ className, title, children }: Props) {
    return (
        <div className={`${className} rounded-lg shadow-2xl p-2 md:p-4 opacity-100 z-40`}>
            <div className="flex justify-center items-center font-semibold text-3xl p-6">
                {title}
            </div>
            <hr className="w-full h-1 rounded-md bg-COLOR_SECONDARY border-COLOR_SECONDARY dark:bg-DARK_BLACK dark:border-DARK_BLACK" />
            <div className="p-4">
                {children}
            </div>
        </div>
    );
}
