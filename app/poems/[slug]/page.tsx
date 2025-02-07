"use client";
import { poems } from "@/content/poems";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function Page({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [poem, setPoem] = useState<any | null>(null);

    useEffect(() => {
        const index = parseInt(params.slug) - 1;
        if (index >= 0 && index < poems.length) {
            setPoem(poems[index]);
        } else {
            setPoem(null);
        }
    }, [params.slug]);

    function previous() {
        router.back();
    }

    if (!poem) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-lg">Загрузка...</p>
            </div>
        );
    }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${poem.bg})`,
                    opacity: 50,
                }}
                className="w-full h-auto py-[50px] px-[30px] flex justify-center items-center max-md:px-[10px] overflow-hidden relative min-h-screen bg-cover bg-center"
            >
                <Button
                    className="absolute left-0 top-0 mx-[30px] my-[10px] max-md:mx-[10px] z-50"
                    variant="ghost"
                    size="icon"
                    onClick={previous}
                >
                    <MoveLeft />
                </Button>
                <div className="flex flex-col items-center px-[10px]">
                    <h1 className="text-xl">{poem.title}</h1>
                    <div>
                        <p
                            className="mt-[20px] text-base whitespace-pre-line max-md:text-sm"
                            dangerouslySetInnerHTML={{
                                __html: poem.text.replace(/\n/g, "<br />"),
                            }}
                        />
                        {poem.year && (
                            <p className="mt-[10px] text-sm text-accent w-full">
                                {poem.year} год
                            </p>
                        )}
                        <p className="mt-[10px] text-sm text-accent w-full">
                            {poem.genres[0]}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
