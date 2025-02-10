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
    return <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center w-screen">
            {imageDatas.map((item, index) => {
                return (
                    <div key={`${item.id}-${index}`} className="">
                        <Image
                            src={item.image}
                            alt={item.image}
                            height={500}
                            width={500}
                            className="object-cover w-full"
                        />
                    </div>
                );
            })}
        </div>;
        <div className="flex justify-center items-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo facilis et dolor sequi, illum consequuntur maxime error amet aliquam voluptates repudiandae perspiciatis! Possimus vel explicabo saepe id harum dolores natus?
        </div>
    </div>
}
