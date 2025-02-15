import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Poems = () => {
    return (
        <div
            id="5"
            className="w-full max-lg:gap-[50px] px-[30px] py-[250px] max-md:p-[10px] flex flex-col overflow-hidden bg-center gap-y-[150px] bg-[url(/images/bio/poems_bg.png)] bg-cover"
        >
            {/*1*/}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px]">
                <div className="w-[50%] max-md:w-[85%] flex items-end max-md:items-start flex-col space-y-[50px] max-md:space-y-[20px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-2 items-end"
                    >
                        <p className="text-accent font-black">часть 5.</p>
                        <p className="text-5xl max-lg:text-3xl">стихи</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-md:text-sm text-base max-lg:text-sm"
                    >
                        <p>
                            «Есть два вида литературы: горизонтальная и
                            вертикальная, — говорил Рыжий. — Горизонтальная —
                            это западная. Они пишут много, просто текст,
                            полотно, в нем есть хорошие места, есть плохие. А
                            есть вертикальная литература — это наша, русская, мы
                            пишем, потом что-то вымарываем, что-то оставляем. И
                            вот как раз мастерство — поэтом, “писакой” быть
                            очень просто, а мастером стать очень сложно —
                            мастерство заключается в том, чтобы из того, что ты
                            сделал, оставить нужное или дописать что-то, но при
                            этом не тронуть девственность этого вдохновения. Это
                            самое главное».
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-[400px] relative max-w-[500px] w-full max-md:h-[300px]"
                    >
                        <Image
                            src={"/images/bio/bio12.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-[20px] max-w-[500px] w-full max-md:text-sm text-base max-lg:text-sm"
                    >
                        <p>
                            Он был мастером. «Только кажется, что у него простые
                            стихи, на самом деле это сложная, высокопробная
                            поэзия, — объясняет Дозморов. — Он понятен всем:
                            искушенному в стихах человеку и человеку, который в
                            стихах не разбирается. Эта универсальность —{" "}
                            <b className="font-black text-accent">уникальное</b>{" "}
                            свойство. Такое, возможно, было у Есенина и
                            Высоцкого. Люди искренне считали, что Высоцкий
                            воевал, сидел, лазал по горам. У Бориса тот же
                            талант Протея, уникальный талант».
                        </p>
                    </motion.div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0"></div>
            </div>
            {/*2*/}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col max-md:items-end max-md:gap-[20px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-[50%] flex items-end flex-col gap-y-[5px] text-sm font-black max-md:w-[85%]"
                >
                    <div className="h-[600px] relative max-w-[500px] w-full max-md:h-[450px]">
                        <Image
                            src={"/images/bio/bio13.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                    <p className="max-w-[500px] w-full">
                        Борис Рыжий на вручении премии «Антибукер»
                    </p>
                </motion.div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-[85%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-md:text-sm text-base max-lg:text-sm"
                    >
                        <p className="max-w-[500px] w-full">
                            Александр Кушнер главным в поэзии Рыжего называет
                            сочетание высокой поэтической «музыки» с низкой
                            прозой жизни молодого человека девяностых годов в
                            Екатеринбурге. Евгений Рейн отмечал его раннюю
                            стихотворческую зрелость, доскональное знание
                            классической, модернистской, советской поэзии,
                            твердо продуманной и строго доказательной позиции в
                            литературной работе.
                        </p>
                        <p>
                            Рыжий начал писать стихи в школе, а с 1992 года его
                            уже стали публиковать. В то время о появлении нового
                            поэта можно было узнать только из литературных
                            журналов, и стихи Рыжего печатались в «Звезде»,
                            «Урале», альманахе Urbi. Настоящий успех пришел
                            после публикации в «Знамени» в 1999 году. За эту
                            подборку «фирменных» стихов Рыжему спустя почти год
                            вручили премию «Антибукер».
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Poems;
