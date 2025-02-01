"use client";
import Archive from "@/components/biography/Archive";
import Childhood from "@/components/biography/Childhood";
import End from "@/components/biography/End";
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
            <img src="/images/bio/childhood.svg" className="w-full px-[30px]" />
            <Childhood />
            <img
                src="/images/bio/vtorchermet.svg"
                className="w-full px-[30px]"
            />
            <Vtorchermet />
            <img src="/images/bio/family.svg" className="w-full px-[30px]" />
            <Family />
            <img src="/images/bio/exile.svg" className="w-full px-[30px]" />
            <Exile />
            <img src="/images/bio/poems.svg" className="w-full px-[30px]" />
            <Poems />
            <img src="/images/bio/archieve.svg" className="w-full px-[30px]" />
            <Archive />
        </div>
    );
};

export default page;
