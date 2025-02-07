import React from "react";
import { baseUrl } from "../layout";
import ProfileAndTimeLine from "@/components/page/ProfileAndTimeLine";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {};

export default async function About({}: Props) {
    const response = await fetch(`${baseUrl}/about`);
    const timelineDatas = await response.json();
    const t = await getTranslations('Aboutpage');

    return (
        <ProfileAndTimeLine timeLineDatas={timelineDatas.data} titleTimeLine={t('project')}/>
    );
}
