import React from "react";
import { baseUrl } from "../layout";
import ProfileAndTimeLine from "@/components/page/ProfileAndTimeLine";

type Props = {};

export default async function About({}: Props) {
    const response = await fetch(`${baseUrl}/about`);
    const timelineDatas = await response.json();

    return (
        <ProfileAndTimeLine timeLineDatas={timelineDatas.data}/>
    );
}
