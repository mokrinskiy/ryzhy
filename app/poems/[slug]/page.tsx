"use client";
import { poems } from "@/content/poems";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [poem, setPoem] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { slug } = await params; // правильное получение slug
            const index = parseInt(slug) - 1;

            // Проверяем, существует ли такой индекс в массиве стихов
            if (index >= 0 && index < poems.length) {
                setPoem(poems[index]);
            } else {
                setPoem(null);
            }

            setLoading(false);
        };

        fetchData();
    }, [params]); // useEffect с зависимостью от params

    const router = useRouter();

    function previous() {
        router.back();
    }

    // Пока данные не загружены, показываем сообщение "Загрузка..."
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-xl text-gray-500">Загрузка...</p>
            </div>
        );
    }

    if (!poem) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-xl text-gray-500">
                    Стихотворение не найдено
                </p>
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
