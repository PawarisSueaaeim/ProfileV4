import React from "react";
import Image from "next/image";
import CardPrimary from "@/common/card/CardPrimary";
import Profile from "@/common/uicomp/Profile";
import { getTranslations } from "next-intl/server";
import TimeLine from "@/components/about/TimeLine";

const baseUrl = process.env.NEXT_PUBLIC_API

type Props = {};

export default async function About({}: Props) {
    const t = await getTranslations('Aboutpage');

    const response = await fetch(`${baseUrl}/about`);
    const timelineDatas = await response.json();

    return (
        <div className="flex flex-col w-full justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8 w-3/4">
                <div className="flex justify-center md:justify-end items-center">
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
                <div className="flex flex-col justify-center items-center md:items-start md:max-w-[20rem]">
                    <div>
                        <div className="font-semibold text-xl md:text-3xl">
                            {t("name")}
                        </div>
                        <div className="flex justify-end font-light">
                            ({t("nickname")})
                        </div>
                        <hr className="bg-COLOR_TERTIARY dark:bg-COLOR_PRIMARY h-1 w-16" />
                        <div>{t("descriptions")}</div>
                    </div>
                </div>
            </div>
            <CardPrimary title={t("project")}>
                <TimeLine timeLineDatas={timelineDatas.data}/>
            </CardPrimary>
        </div>
    );
}
