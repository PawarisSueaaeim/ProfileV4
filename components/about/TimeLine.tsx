import Image from "next/image";
import React from "react";

export type tTimeLineDatas = {
    id: string;
    title: string;
    date: string;
    latest: boolean;
    description: string;
    image: any;
};

type Props = {
    timeLineDatas: tTimeLineDatas[];
};

export default function TimeLine({ timeLineDatas }: Props) {
    return (
        <ol className="relative border-s border-COLOR_PRIMARY dark:border-DARK_WHITE">
            {timeLineDatas.map((item: tTimeLineDatas) => {
                return (
                    <li key={item.id} className="mb-10 ms-6 gap-2">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <Image
                                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                src={item.image}
                                alt={item.title}
                                height={20}
                                width={20}
                            />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white gap-4">
                            {item.title}
                            <span
                                className={`${
                                    item.latest ? "block" : "hidden"
                                } bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3`}
                            >
                                Latest
                            </span>
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {item.date}
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                    </li>
                );
            })}
        </ol>
    );
}
