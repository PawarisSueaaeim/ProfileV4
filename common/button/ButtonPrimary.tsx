import React from "react";

type Props = {
    title: string;
    className: string;
    onClick: (event: MouseEvent) => void;
};

export default function ButtonPrimary({ title, className, onClick }: Props) {
    return (
        <button className={`${className}`} onClick={() => onClick}>
            {title}
        </button>
    );
}
