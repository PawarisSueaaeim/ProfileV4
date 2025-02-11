import Carousel from "@/components/carousel/Carousel";
import CardSkills from "@/components/skills/CardSkills";
import React from "react";

type Props = {};

export default function Performance({}: Props) {
    const rapidImages = [
        { id: "001", image: "/pictures/rapid-dashboard-01.png" },
        { id: "002", image: "/pictures/rapid-dashboard-02.png" },
        { id: "003", image: "/pictures/rapid-dashboard-03.png" },
        { id: "004", image: "/pictures/rapid-auto-01.png" },
        { id: "005", image: "/pictures/rapid-auto-02.png" },
        { id: "006", image: "/pictures/rapid-auto-03.png" },
        { id: "007", image: "/pictures/rapid-life-01.png" },
        { id: "008", image: "/pictures/rapid-life-02.png" },
        { id: "009", image: "/pictures/rapid-life-03.png" },
        { id: "010", image: "/pictures/rapid-now-01.png" },
        { id: "011", image: "/pictures/rapid-now-02.png" },
    ];
    return (
        <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center gap-8">
                <Carousel imageDatas={rapidImages} />
                <CardSkills/>
            </div>
        </div>
    );
}
