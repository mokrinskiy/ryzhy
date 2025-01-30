import Image from "next/image";
import React from "react";

const Exile = () => {
    return (
        <div className="w-full px-[30px] pt-[10px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[150px] bg-center bg-[url(/images/bio/exile_bg.png)] py-[150px] bg-cover">
            {/* 1 */}
            <div className="space-y-[50px]">
                <div className="w-full h-full flex justify-between gap-[150px]">
                    <div className="w-[50%] flex justify-end items-end">
                        <div className="flex gap-2 items-end">
                            <p className="text-accent font-black">часть 4.</p>
                            <p className="text-5xl">изгнанник</p>
                        </div>
                    </div>
                    <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg"></div>
                </div>
                <div className="w-full h-full flex justify-between gap-[150px]">
                    <div className="w-[50%] flex justify-end items-end">
                        <div className="w-[500px] h-[400px] relative">
                            <Image
                                src={"/images/bio/bio10.png"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover aspect-video"
                                fill={true}
                            />
                        </div>
                    </div>
                    <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg">
                        <div className="w-[500px] space-y-[20px]">
                            <p className="w-[500px]">
                                «Рыжий был моим единственным собеседником в
                                Екатеринбурге, который мог наизусть прочесть,
                                например, Батюшкова, — говорит близкий друг
                                Бориса поэт Олег Дозморов. — Я филолог, но читал
                                русской поэзии меньше, чем Борис. Хулиганом с
                                задней парты он точно не был. Конечно, он мог
                                кому-то двинуть, ответить на хамство, но это не
                                было его сутью — скорее, одна из его масок.
                                Когда он общался с литераторами, интеллигенцией,
                                то надевал маску такого парня».
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="w-full h-full flex justify-between gap-[150px]">
                <div className="w-[50%] flex justify-end items-end space-y-[50px] flex-col">
                    <div className="w-[500px] space-y-[20px]">
                        <p>
                            По мнению Дозморова, своим среди интеллигенции Борис
                            не был — не хватало «лоска»: «Но и в среде “оторви и
                            брось” своим он не был тоже. Думаю, это один из его
                            глубочайших внутренних конфликтов: он нигде не мог
                            почувствовать себя своим — вечный маргинал и
                            изгнанник. Только поэзия для него была выходом в
                            пространство, где он был собой».
                        </p>
                        <p>
                            Сергей Лузин, лучший друг Бориса школьной поры, в
                            фильме «Борис Рыжий» Алены ван Дер Хорст говорил
                            примерно то же самое: «Свой среди чужих, чужой среди
                            своих. В интеллигентский круг он не вписывался, а у
                            нас тоже была внутренняя черта, которую он не мог
                            переступить. Он не мог криминалом заниматься,
                            поэтому такой внутренний конфликт».
                        </p>
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg"></div>
            </div>
            {/* 4 */}
            <div className="w-full h-full flex justify-center">
                <div className="w-[1150px] h-[700px] relative">
                    <Image
                        src={"/images/bio/bio11.png"}
                        alt="bio1"
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </div>
            {/* 5 */}
            <div className="w-full h-full flex justify-between gap-[150px]">
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg"></div>
                <div className="w-[50%] flex space-y-[50px] flex-col">
                    <div className="w-[500px] space-y-[20px]">
                        <p>
                            «Мы часто делились воспоминаниями из детства,
                            говорили о людях, рядом с которыми жили, о смертях,
                            которые видели, — вспоминает Дозморов. — Как-то Боря
                            мне сказал: “Знаешь, Олег, в чем разница между мной
                            и тобой? В том, что я этих людей любил”. Для меня
                            действительно эти люди были на уровне “анекдотов”, а
                            Боря по-настоящему сострадал. Он чувствовал вину
                            перед ними. Он не просто всех знал на Вторчермете —
                            он всех там жалел. Вся его сложность, ранимость,
                            совестливость выразилась в стихах».
                        </p>
                        <p>
                            Ирина подтверждает: Борис действительно все
                            переживал невозможно остро. «Он как будто две жизни
                            прожил, — добавляет Олег. — Боря жил с такой
                            интенсивностью, что год шел за три, и он морально
                            чувствовал себя стариком. У него внутри был
                            постоянный источник боли, возможно, многолетняя
                            депрессия, но она была частью его личности».
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exile;
