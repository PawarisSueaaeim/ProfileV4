import React from "react";
import { baseUrl } from "../layout";
import ProfileAndTimeLine from "@/components/page/ProfileAndTimeLine";
import { getTranslations } from "next-intl/server";

type Props = {};

export default async function page({}: Props) {
    const response = await fetch(`${baseUrl}/experience`);
    const timelineDatas = await response.json();
    const t = await getTranslations('Experiencepage');

    return (
        <ProfileAndTimeLine timeLineDatas={timelineDatas.data} titleTimeLine={t('experience')}/>
    );
}
