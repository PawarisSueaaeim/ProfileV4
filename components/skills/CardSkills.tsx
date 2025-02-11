import CardPrimary from "@/common/card/CardPrimary";
import { getTranslations } from "next-intl/server";
import React from "react";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobexd, SiJira, SiMui, SiPostman, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

type Props = {};

export default async function CardSkills({}: Props) {
    const t = await getTranslations("Homepage");

    const skillDatas = [
        { name: "HTML", node: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", node: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Javascript", node: <FaJs />, color: "text-yellow-400" },
        { name: "Typescript", node: <SiTypescript />, color: "text-blue-600" },
        { name: "ReactJs", node: <FaReact />, color: "text-blue-400" },
        { name: "NextJs", node: <RiNextjsFill />, color: "text-black" },
        { name: "Redux", node: <SiRedux />, color: "text-purple-700" },
        { name: "MUI", node: <SiMui />, color: "text-blue-400" },
        { name: "TailwindCSS", node: <SiTailwindcss />, color: "text-blue-500" },
        { name: "Bootstrap", node: <FaBootstrap />, color: "text-purple-600" },
        { name: "Postman", node: <SiPostman />, color: "text-orange-600" },
        { name: "Jira", node: <SiJira />, color: "text-blue-500" },
        { name: "Figma", node: <FaFigma />, color: "text-red-500" },
        { name: "AdobeXD", node: <SiAdobexd />, color: "text-purple-800" },
        { name: "GitHub", node: <FaGithub />, color: "text-black" },
        { name: "NodeJs", node: <FaNodeJs />, color: "text-green-500" },
    ];

    return (
        <CardPrimary title={t('skills')} className="w-full md:w-3/4">
            <div className="grid grid-cols-4 md:grid-cols-6 p-8 gap-x-4 gap-y-6">
                {skillDatas.map((item, index) => {
                    return (
                        <div
                            key={`${item.name}-${index}`}
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <span
                                className={`${item.color} text-4xl md:text-6xl`}
                            >
                                {item.node}
                            </span>
                            <span className="text-[0.45rem] md:text-xs">
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </CardPrimary>
    );
}
