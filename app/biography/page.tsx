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
import { motion, useScroll } from "motion/react";
import Footer from "@/components/Footer";

const page = () => {
    const { scrollYProgress } = useScroll();
    useSmoothScroll();

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className="fixed bottom-0 left-0 right-0 h-[3px] z-50 origin-left bg-accent"
                style={{
                    scaleX: scrollYProgress,
                }}
            />
            <div className="space-y-[200px]">
                <Main />
                <img
                    src="/images/bio/childhood.svg"
                    className="w-full px-[30px] max-md:hidden"
                />
                <img
                    src="/images/bio/childhood_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <Childhood />
                <img
                    src="/images/bio/vtorchermet.svg"
                    className="w-full px-[30px] max-md:hidden"
                />
                <img
                    src="/images/bio/vtorchermet_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <Vtorchermet />
                <img
                    src="/images/bio/family.svg"
                    className="w-full px-[30px] max-md:hidden"
                />
                <img
                    src="/images/bio/family_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <Family />
                <img src="/images/bio/exile.svg" className="w-full px-[30px]  max-md:hidden" />
                <img
                    src="/images/bio/exile_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <Exile />
                <img src="/images/bio/poems.svg" className="w-full px-[30px]  max-md:hidden" />
                <img
                    src="/images/bio/poems_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <Poems />
                <img
                    src="/images/bio/archieve.svg"
                    className="w-full px-[30px]  max-md:hidden"
                />
                <img
                    src="/images/bio/archieve_m.svg"
                    className="w-full px-[30px] md:hidden"
                />
                <div>
                    <Archive />
                    <End />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default page;
