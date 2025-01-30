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
import Profile from "@/common/uicomp/Profile";

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
        <div className="flex flex-col justify-center items-center min-h-screen gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-16 md:w-3/4">
                <div className="flex justify-end items-center">
                    <Profile>
                        <Image
                            src="/pictures/profile.jpg"
                            alt="profile"
                            height={300}
                            width={300}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </Profile>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <div className="w-full md:max-w-[20rem]">
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
            <CardPrimary title={t('skills')} className="w-3/4">
                <div className="grid grid-cols-4 md:grid-cols-6 p-8 gap-x-4 gap-y-6">
                    {skillDatas.map((item, index) => {
                        return (
                            <div
                                key={`${item.name}-${index}`}
                                className="flex flex-col justify-center items-center gap-2"
                            >
                                <span className="text-4xl md:text-6xl">{item.node}</span>
                                <span className="text-[0.45rem] md:text-xs">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </CardPrimary>
        </div>
    );
}
