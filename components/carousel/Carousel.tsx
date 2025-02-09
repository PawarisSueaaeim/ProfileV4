import Image from "next/image";
import React from "react";

export type tImageData = {
    id: string;
    image: string;
};

type Props = {
    imageDatas: tImageData[];
};

export default function Carousel({ imageDatas }: Props) {
    return <div className="flex justify-center w-screen">
        {imageDatas.map((item, index) => {
            return (
                <div key={`${item.id}-${index}`} className="absolute">
                    <Image
                        src={item.image}
                        alt={item.image}
                        height={500}
                        width={500}
                    />
                </div>
            );
        })}
    </div>;
}
