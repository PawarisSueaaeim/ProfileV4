import React from "react";
import { baseUrl } from "../layout";
import ProfileAndTimeLine from "@/components/page/ProfileAndTimeLine";

type Props = {};

export default async function page({}: Props) {
    const response = await fetch(`${baseUrl}/experience`);
    const timelineDatas = await response.json();

    return (
        <ProfileAndTimeLine timeLineDatas={timelineDatas.data}/>
    );
}
