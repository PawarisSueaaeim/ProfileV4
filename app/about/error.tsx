"use client";

import { useEffect } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API;

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
        console.log(baseUrl+'/about');
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
