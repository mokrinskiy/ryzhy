import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Exile = () => {
    return (
        <div
            id="4"
            className="w-full px-[30px] max-lg:gap-[50px] py-[250px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[150px] bg-center bg-[url(/images/bio/exile_bg.png)] bg-cover"
        >
            {/* 1 */}
            <div className="gap-y-[50px] max-md:w-full max-md:flex max-md:items-end max-md:flex-col max-md:gap-y-[20px]">
                <div className="w-full md:pb-[50px] max-md:w-[85%] max-md:justify-start h-full flex md:justify-between gap-[150px] max-lg:gap-[50px] max-md:items-start max-md:gap-[20px]">
                    <div className="w-[50%] max-md:w-[85%] flex max-md:justify-start justify-end items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex items-end gap-2"
                        >
                            <p className="text-accent font-black">часть 4.</p>
                            <p className="text-5xl max-lg:text-3xl">
                                изгнанник
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0 max-md:hidden"></div>
                </div>
                <div className="w-full max-md:items-end h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col-reverse">
                    <div className="w-[50%] max-md:w-[85%] flex justify-end items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full h-[400px] relative"
                        >
                            <Image
                                src={"/images/bio/bio10.png"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover aspect-video"
                                fill={true}
                            />
                        </motion.div>
                    </div>
                    <div className="w-[50%] max-md:w-[85%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:text-sm max-md:gap-[20px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full space-y-[20px]"
                        >
                            <p>
                                «Рыжий был моим единственным собеседником в
                                Екатеринбурге, который мог наизусть прочесть,
                                например, Батюшкова, — говорит близкий друг
                                Бориса поэт Олег Дозморов. — Я филолог, но читал
                                русской поэзии меньше, чем Борис.
                                <b className="font-black text-accent">
                                    {" "}
                                    Хулиганом 
                                    {" "}
                                </b>
                                с задней парты он точно не был. Конечно, он мог
                                кому-то двинуть, ответить на хамство, но это не
                                было его сутью — скорее, одна из его масок.
                                Когда он общался с литераторами, интеллигенцией,
                                то надевал маску такого парня».
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px]">
                <div className="w-[50%] max-md:w-[85%] flex justify-end items-end space-y-[50px] flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-md:text-sm"
                    >
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
                    </motion.div>
                </div>
                <div className="w-[50%] max-md:w-0 min-h-full flex gap-y-[50px] flex-col text-lg"></div>
            </div>
            {/* 4 */}
            <div className="w-full h-full flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-[1150px] w-full h-[700px] relative max-md:h-[300px]"
                >
                    <Image
                        src={"/images/bio/bio11.png"}
                        alt="bio1"
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </motion.div>
            </div>
            {/* 5 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px]">
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0"></div>
                <div className="w-[50%] flex space-y-[50px] flex-col max-md:w-[85%] max-md:text-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px]"
                    >
                        <p>
                            «Мы часто делились воспоминаниями из детства,
                            говорили о людях, рядом с которыми жили, о смертях,
                            которые видели, — вспоминает Дозморов. — Как-то Боря
                            мне сказал: “Знаешь, Олег, в чем разница между мной
                            и тобой? В том, что я этих людей любил”. Для меня
                            действительно эти люди были на уровне “анекдотов”, а
                            Боря по-настоящему сострадал. Он чувствовал
                            <b className="font-black text-accent"> вину </b>
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Exile;
