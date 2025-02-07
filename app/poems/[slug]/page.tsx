"use client";
import { poems } from "@/content/poems";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    function previous() {
        window.history.back();
    }
    return (
        <>
            <div className="w-full h-auto py-[50px] px-[30px] flex justify-center items-center max-md:px-[10px] overflow-hidden relative min-h-screen">
                <Button
                    className="absolute left-0 top-0 mx-[30px] my-[10px] max-md:mx-[10px]"
                    variant="ghost"
                    size="icon"
                    onClick={previous}
                >
                    <MoveLeft />
                </Button>
                <div className="flex flex-col items-center px-[10px]">
                    <h1 className="text-xl">
                        {poems[parseInt(slug) - 1].title}
                    </h1>
                    <div>
                        <p
                            className="mt-[20px] text-base whitespace-pre-line max-md:text-sm"
                            dangerouslySetInnerHTML={{
                                __html: poems[parseInt(slug) - 1].text.replace(
                                    /\n/g,
                                    "<br />"
                                ),
                            }}
                        />
                        {poems[parseInt(slug) - 1].year && (
                            <p className="mt-[10px] text-sm text-accent w-full">
                                {poems[parseInt(slug) - 1].year} год
                            </p>
                        )}
                        <p className="mt-[10px] text-sm text-accent w-full">
                            {poems[parseInt(slug) - 1].genres[0]}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
