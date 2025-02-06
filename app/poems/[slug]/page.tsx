import { poems } from "@/content/poems";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
    const index = Number(params.slug) - 1;
    const item = poems[index];

    if (!item) {
        return (
            <div className="text-center text-red-500">
                Стихотворение не найдено
            </div>
        );
    }

    return (
        <div className="w-full h-auto py-[50px] flex justify-center items-center max-md:px-[10px] overflow-hidden">
            <div className="flex flex-col items-center px-[10px]">
                <h1 className="text-xl">{item.title}</h1>
                <div>
                    <p
                        className="mt-[20px] text-base whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                            __html: item.text.replace(/\n/g, "<br />"),
                        }}
                    />
                    {item.year && (
                        <p className="mt-[10px] text-sm text-accent w-full">
                            {item.year} год
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
