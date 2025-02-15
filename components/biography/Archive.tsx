import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Archive = () => {
    return (
        <div
            id="6"
            className="w-full px-[30px] max-md:p-[10px] py-[250px] max-lg:py-[100px] flex flex-col overflow-hidden gap-y-[150px] max-md:gap-y-0 max-lg:gap-y-[50px] bg-center bg-[url(/images/bio/archieve_bg.png)] bg-cover"
        >
            {/*1*/}
            <div className="w-full max-md:items-start h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col">
                <div className="w-[50%] max-md:w-[85%] flex max-md:items-start items-end flex-col space-y-[50px] max-lg:space-y-[20px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-2 items-end"
                    >
                        <p className="text-accent font-black">часть 6.</p>
                        <p className="text-5xl max-lg:text-3xl">архив</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px] max-md:text-sm text-base max-lg:text-sm"
                    >
                        <p>
                            7 мая 2001 года в квартире своих родителей в
                            Екатеринбурге Борис покончил жизнь самоубийством. Он
                            оставил записку: «Я всех любил, без дураков». На
                            вопрос, почему он принял такое решение, из его
                            близких ответить никто не может.
                        </p>
                        <p>
                            После его смерти дома осталась кипа бумаг со
                            стихами. Архив разбирал отец — с невиданной
                            энергией. «Папа считал, что стихи надо быстрее
                            публиковать, чтобы они не пропали, —{" "}
                            <b className="font-black text-accent">
                                вспоминает{" "}
                            </b>
                            Ирина. — Он действительно много сделал, но там были
                            стихи, которые — я точно знаю — Боря не стал бы
                            публиковать. Он очень требовательно относился в
                            своим стихам».
                        </p>
                        <p>
                            Ирина добавляет: писал всегда трезвым, обычно
                            ночами, потом вносил правки. А иногда во время
                            разговора замирал и начинал загибать пальцы — считал
                            количество слогов.
                        </p>
                    </motion.div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0"></div>
            </div>
            {/* 2 */}
            <div className="w-full h-full flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-[1150px] w-full h-[700px] max-lg:h-[400px] relative max-md:h-[300px]"
                >
                    <Image
                        src={"/images/bio/bio15.png"}
                        alt="bio1"
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </motion.div>
            </div>
            {/* 3 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col max-md:items-end">
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0"></div>
                <div className="w-[50%] flex-col space-y-[50px] max-lg:space-y-[20px] max-md:w-[85%]">
                    <div className="max-w-[500px] w-full space-y-[50px] max-lg:space-y-[20px] max-md:text-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="space-y-[20px] max-lg:space-y-[10px] text-base max-lg:text-sm"
                        >
                            <p className="font-black">
                                Вадим Курочкин, близкий университетский друг
                                Бориса, стоит на метеогорке и смотрит на
                                Екатеринбург.
                            </p>
                            <p>
                                До строительства небоскреба «Высоцкий»
                                метеогорка была самой высокой точкой города.
                                Отсюда видно, как хаотично меняется город в
                                последние годы: стеклянно-бетонные гиганты
                                втискиваются между хрущевками и историческими
                                постройками. Ощущение, что городу будто
                                пристроили несколько этажей.
                            </p>
                            <p>
                                Вдалеке слева — Вторчермет, за ним — Елизавет,
                                еще один рабочий район. Курочкин жил как раз в
                                Елизавете, каждый день добирался до центра
                                города полтора часа.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full h-[600px] max-lg:h-[400px] relative"
                        >
                            <Image
                                src={"/images/bio/bio16.png"}
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
                            className="space-y-[20px] max-lg:space-y-[10px]"
                        >
                            <p>
                                Вадим дружил с Борисом не «по части поэзии». Он
                                ни разу не читал «Роттердамский дневник» Рыжего,
                                и я читаю ему отрывки — описание их студенческих
                                «приключений». «Я начинаю вспоминать этого
                                Махача, жену его, — оживляется Курочкин. —
                                Дискотеку эту помню. Боря мне еще сказал:
                                танцуем спина к спине, чтобы прикрывать друг
                                друга. Это его правило было, он же боксер…»
                            </p>
                            <p>
                                Вадим узнал о смерти Бориса из новостей по
                                радио, но даже не придал этому значения —
                                подумал, что это очередной{" "}
                                <b className="text-accent font-black">
                                    розыгрыш
                                </b>{" "}
                                Рыжего. Он говорит, что таких друзей, как Боря,
                                у него никогда не было и больше не будет. «Каким
                                бы он был сейчас? Высокий, красивый, с усами.
                                Да, я бы попросил его отрастить. Интересно
                                посмотреть на Борю с усами: со шрамом видел, а с
                                усами — нет. Я шучу, конечно».
                            </p>
                            <p>
                                И он чуть ли не впервые за весь наш разговор
                                улыбается.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Archive;
