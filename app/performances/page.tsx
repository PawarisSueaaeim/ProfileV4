import Carousel from "@/components/carousel/Carousel";
import React from "react";

type Props = {};

export default function Performance({}: Props) {
    const rapidAutoImages = [
        { id: "001", image: "/pictures/rapid-dashboard-01.png" },
        { id: "002", image: "/pictures/rapid-dashboard-02.png" },
        { id: "003", image: "/pictures/rapid-dashboard-03.png" },
        { id: "004", image: "/pictures/rapid-dashboard-04.png" },
    ];
    return (
        <div className="min-h-screen flex justify-center">
            <Carousel imageDatas={rapidAutoImages} />
        </div>
    );
}
