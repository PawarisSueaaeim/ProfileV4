import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
    title: "About",
    description: "About Pawaris Website",
    keywords: "pawaris rabeab",
};

export default function About({}: Props) {
    return <div>About</div>;
}
