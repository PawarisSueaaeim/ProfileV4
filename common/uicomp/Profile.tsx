import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Profile({ children }: Props) {
    return <div className="w-64 h-64 md:h-96 rounded-full overflow-hidden shadow-2xl hover:scale-125 duration-500">
        {children}
    </div>;
}
