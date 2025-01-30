import CardPrimary from "@/common/card/CardPrimary";
import DownloadResume from "@/components/homepage/DownloadResume";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function Home() {
    const t = useTranslations("Homepage");

    const skillDatas = [
        { name: "HTML", node: <FaHtml5 /> },
        { name: "CSS", node: <FaCss3Alt /> },
        { name: "Javascript", node: <FaJs /> },
        { name: "Typescript", node: <SiTypescript /> },
        { name: "ReactJs", node: <FaReact /> },
        { name: "NextJs", node: <RiNextjsFill /> },
        { name: "Redux", node: <SiRedux /> },
        { name: "MUI", node: <SiMui /> },
        { name: "TailwindCSS", node: <SiTailwindcss /> },
        { name: "Bootstrap", node: <FaBootstrap /> },
        { name: "Postman", node: <SiPostman /> },
        { name: "Jira", node: <SiJira /> },
        { name: "NodeJs", node: <FaNodeJs /> },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 dark:text-DARK_WHITE py-8 gap-8">
                <div className="flex justify-center items-center mt-10 md:mt-0">
                    <div className="w-64 h-64 md:h-96 rounded-full overflow-hidden shadow-2xl">
                        <Image
                            src="/pictures/profile.jpg"
                            alt="profile"
                            height={300}
                            width={300}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <div className="font-semibold text-xl md:text-3xl">
                            {t("name")}
                        </div>
                        <hr className="bg-COLOR_TERTIARY dark:bg-COLOR_PRIMARY h-1 w-16" />
                        <div className="font-semibold text-lg md:text-2xl">
                            {t("title")}
                        </div>
                        <div className="flex justify-end font-light text-sm mb-10">
                            {t("position")}
                        </div>
                        <DownloadResume />
                    </div>
                </div>
            </div>
            <CardPrimary>
                <div className="flex justify-center items-center font-semibold text-3xl">
                    {t("skills")}
                </div>
                <hr className="w-full bg-COLOR_SECONDARY border-COLOR_SECONDARY dark:bg-DARK_BLACK dark:border-DARK_BLACK" />
                <div className="grid grid-cols-4 md:grid-cols-6 p-8 gap-x-4 gap-y-6">
                    {skillDatas.map((item, index) => {
                        return (
                            <div
                                key={`${item.name}-${index}`}
                                className="flex flex-col justify-center items-center gap-2"
                            >
                                <span className="text-6xl">{item.node}</span>
                                <span className="text-xs">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </CardPrimary>
        </div>
    );
}
