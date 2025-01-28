import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function CardPrimary({ children }: Props) {
    return <div className="rounded-lg shadow-2xl p-2 md:p-4">{children}</div>;
}
