import { poems } from "@/content/poems";
import React from "react";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return (
        <div className="w-full h-auto py-[50px] flex justify-center items-center max-md:px-[10px] overflow-hidden">
            <div className="flex flex-col items-center px-[10px]">
                <h1 className="text-xl">{poems[parseInt(slug) - 1].title}</h1>
                <div>
                    <p
                        className="mt-[20px] text-base whitespace-pre-line"
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
                </div>
            </div>
        </div>
    );
}
