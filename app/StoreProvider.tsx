"use client";
import React from "react";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { FaMoon } from "react-icons/fa";

type Props = {
    children: React.ReactNode;
};

export default function StoreProvider({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
}
