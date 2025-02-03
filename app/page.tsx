import CardPrimary from "@/common/card/CardPrimary";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAdobexd, SiJira, SiMui, SiPostman, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Profile from "@/common/uicomp/Profile";
import DownloadResume from "@/common/download/DownloadResume";
import Typing from "@/common/uicomp/Typing";

export default function Home() {
    const t = useTranslations("Homepage");

    const skillDatas = [
        { name: "HTML", node: <FaHtml5 /> , color: "text-orange-500"},
        { name: "CSS", node: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Javascript", node: <FaJs /> , color: "text-yellow-400" },
        { name: "Typescript", node: <SiTypescript />, color: "text-blue-600" },
        { name: "ReactJs", node: <FaReact /> , color: "text-blue-400"},
        { name: "NextJs", node: <RiNextjsFill /> , color: "text-black"},
        { name: "Redux", node: <SiRedux /> , color: "text-purple-700"},
        { name: "MUI", node: <SiMui /> , color: "text-blue-400"},
        { name: "TailwindCSS", node: <SiTailwindcss /> , color: "text-blue-500"},
        { name: "Bootstrap", node: <FaBootstrap /> , color: "text-purple-600"},
        { name: "Postman", node: <SiPostman /> , color: "text-orange-600"},
        { name: "Jira", node: <SiJira /> , color: "text-blue-500"},
        { name: "Figma", node: <FaFigma/> , color: "text-red-500"},
        { name: "AdobeXD", node: <SiAdobexd />, color: "text-purple-800"},
        { name: "GitHub", node: <FaGithub />, color: "text-black"},
        { name: "NodeJs", node: <FaNodeJs /> , color: "text-green-500"},
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
                        <Typing className="font-semibold text-xl md:text-4xl" text={t("name")} delay={700}/>
                        <hr className="bg-COLOR_TERTIARY dark:bg-COLOR_PRIMARY h-1 w-16" />
                        <div className="font-semibold text-lg md:text-2xl">
                            {t("title")}
                        </div>
                        <div className="flex justify-end font-light text-sm">
                            {t("position")}
                        </div>
                        <ol className="list-disc list-inside mb-10">
                            <li>{t('descriptions1')}</li>
                            <li>{t('descriptions2')}</li>
                            <li>{t('descriptions3')}</li>
                            <li>{t('descriptions4')}</li>
                        </ol>
                        <DownloadResume />
                    </div>
                </div>
            </div>
            <CardPrimary title={t('skills')} className="w-full md:w-3/4">
                <div className="grid grid-cols-4 md:grid-cols-6 p-8 gap-x-4 gap-y-6">
                    {skillDatas.map((item, index) => {
                        return (
                            <div
                                key={`${item.name}-${index}`}
                                className="flex flex-col justify-center items-center gap-2"
                            >
                                <span className={`${item.color} text-4xl md:text-6xl`}>{item.node}</span>
                                <span className="text-[0.45rem] md:text-xs">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </CardPrimary>
        </div>
    );
}
