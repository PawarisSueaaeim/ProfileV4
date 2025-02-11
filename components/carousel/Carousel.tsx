"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export type tImageData = {
    id: string;
    image: string;
};

type Props = {
    imageDatas: tImageData[];
};

export default function Carousel({ imageDatas }: Props) {
    const [showIndex, setShowIndex] = useState<number>(0);

    const handleOnChangeNext = () => {
        if (showIndex < imageDatas.length - 1) {
            setShowIndex(showIndex + 1);
            console.log("test");
        }
    };

    const handleOnChangePrev = () => {
        if (showIndex > 0) {
            setShowIndex(showIndex - 1);
        }
    };

    return (
        <div className="w-[40rem]">
            <div className="relative overflow-hidden">
                <div
                    className="flex h-[30rem] justify-start items-center duration-500"
                    style={{
                        transform: `translateX(-${showIndex * 100}%`,
                    }}
                >
                    {imageDatas.map((item, index) => {
                        return (
                            <div
                                key={`${item.id}-${index}`}
                                className="min-w-[40rem] h-[30rem] flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={`image-${item.id}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute flex justify-between items-center top-0 z-10 w-full h-full">
                    <FaAngleLeft
                        className="text-3xl"
                        onClick={() => handleOnChangePrev()}
                    />
                    <FaAngleRight
                        className="text-3xl"
                        onClick={() => handleOnChangeNext()}
                    />
                </div>
            </div>
        </div>
    );
}
