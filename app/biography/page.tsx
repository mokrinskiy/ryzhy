"use client";
import Archive from "@/components/biography/Archive";
import Childhood from "@/components/biography/Childhood";
import Exile from "@/components/biography/Exile";
import Family from "@/components/biography/Family";
import Main from "@/components/biography/Main";
import Poems from "@/components/biography/Poems";
import Vtorchermet from "@/components/biography/Vtorchermet";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import React from "react";

const page = () => {
    useSmoothScroll();
    return (
        <div className="space-y-[200px]">
            <Main />
            <Childhood />
            <Vtorchermet />
            <Family />
            <Exile />
            <Poems />
            <Archive />
        </div>
    );
};

export default page;
