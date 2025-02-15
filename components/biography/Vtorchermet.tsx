import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Vtorchermet = () => {
    return (
        <div
            id="2"
            className="w-full pt-[10px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[150px] max-lg:gap-y-[50px]"
        >
            {/* 1 */}
            <div className="bg-[url(/images/bio/vtorchermet_bg.png)] bg-center bg-cover gap-y-[150px] max-lg:gap-y-[50px] flex flex-col px-[30px] max-md:px-[10px] pt-[250px] max-lg:pt-[100px]">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col max-md:items-end max-md:gap-[20px]">
                    <div className="w-[50%] max-md:w-[85%] flex justify-end items-start max-md:justify-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex gap-2 items-end"
                        >
                            <p className="text-accent font-black">часть 2.</p>
                            <p className="text-5xl max-lg:text-3xl">
                                вторчермет
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[50%] max-md:w-[85%] min-h-full flex gap-y-[50px] max-lg:gap-y-[20px] flex-col text-lg max-lg:text-base">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full h-[600px] max-lg:h-[400px] relative"
                        >
                            <Image
                                src={"/images/bio/bio4.jpg"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover"
                                fill={true}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full space-y-[20px] text-base max-lg:text-sm"
                        >
                            <p>
                                Удар, удар, снова удар. На боксерском ринге
                                тренируются двое подтянутых 46-летних мужчин.
                                Тренер Сергей Манин наблюдает бой. Сейчас он
                                работает в частном клубе, а раньше занимался с
                                детьми в спортивной школе бокса. Туда к нему
                                подростком и пришел Борис.
                            </p>
                            <p>
                                Манин, конечно, помнит не всех, кто ходил к нему
                                на секцию: тренером он работает с 86-го года,
                                каждый год поток — 120 человек. «Меня как-то
                                спросили: пацанов много, как ты определяешь, кто
                                талантливый? Я ответил: представь, что это общая
                                масса. Если я вижу умный, осмысленный взгляд,
                                заинтересованность, значит, в человеке что-то
                                есть. Для меня это так работает».
                            </p>
                            <p>
                                Рыжего Манин запомнил. Он выделялся сразу по
                                нескольким причинам: фамилия,
                                <b className="font-black text-accent"> шрам</b>,
                                а еще — интерес к боксу. По словам близких,
                                Борис даже одержал победу на городских юношеских
                                соревнованиях, но потом решил уйти из секции.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* 2 */}
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-[50%] max-md:w-full flex items-end gap-y-[5px] flex-col font-black text-sm"
                    >
                        <div className="max-w-[500px] w-full h-[600px] max-lg:h-[400px] relative max-md:h-[600px]">
                            <Image
                                src={"/images/bio/bio5.jpg"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover"
                                fill={true}
                            />
                        </div>
                        <p>Борис с отцом на демонстрации</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-[50%] max-md:w-full min-h-full flex gap-y-[5px] flex-col text-sm font-black"
                    >
                        <div className="max-w-[500px] w-full h-[600px] max-lg:h-[400px] relative max-md:h-[600px]">
                            <Image
                                src={"/images/bio/bio6.jpg"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover"
                                fill={true}
                            />
                        </div>
                        <p className="max-w-[500px] w-full">Борис в детстве</p>
                    </motion.div>
                </div>
                {/* 3 */}
                <div className="w-full max-md:w-[85%] max-md:text-sm h-full flex justify-between gap-[150px] max-md:gap-0 max-md:flex-col">
                    <div className="w-[50%] max-md:w-full flex justify-end items-end space-y-[50px] max-lg:space-y-[20px] flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px]"
                        >
                            <p>
                                Когда Борис рос, они жили в достатке. «Помню,
                                как я думала: не дай Бог мещанство! — вспоминает
                                Ольга. — Как-то купили домой шкаф, в который в
                                то время все выставляли посуду. Мы с сестрой
                                подумали: не хватало нам еще посуды, и поставили
                                туда минералы, которые папа привозил со всей
                                страны».
                            </p>
                            <p>
                                В единственном доступном видеоинтервью Рыжий
                                показывает журналистам свой двор: «Это мой двор,
                                мой дом, где я прожил лучшую половину своей
                                жизни. Я прожил тут десять лет. Здесь ничего не
                                изменилось, все по-старому, как было.
                                Прибавились решетки на окнах и надписи стали не
                                по-русски на стенах, а по-английски. Что еще…
                                Тут поумирала, наверное, большая часть моих{" "}
                                <b className="font-black text-accent">
                                    {" "}
                                    любимых
                                </b>{" "}
                                людей — в основном от наркотиков. Те, кого я
                                любил и кого я уважал».
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-[50%] max-md:w-0 max-md:h-0 min-h-full flex gap-y-[50px] flex-col text-lg"></div>
                </div>
            </div>
            {/* 4 */}
            <div className="w-full h-full max-md:flex-col-reverse flex justify-between gap-[150px] max-lg:gap-[50px] max-md:items-end px-[30px] max-md:px-[10px] max-md:gap-0">
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:w-0"></div>
                <div className="w-[50%] max-md:w-[85%] flex items-start space-y-[50px] max-lg:space-y-[20px] flex-col">
                    <div className="max-w-[500px] w-full space-y-[50px] max-lg:space-y-[20px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <video controls className="w-full">
                                <source
                                    src="/video/vtorchermet.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="font-black max-md:text-sm"
                        >
                            «Я десять лет живу в доме, где 90 процентов жильцов
                            — бывшие заключенные, — говорил Рыжий уже в другом
                            интервью. — Я очень люблю этих людей. У нас в доме
                            жили два брата, один из них зарезал человека, а
                            другой вывез труп на грузовике. Об этом в доме знали
                            все, знала вся местная шантрапа — милиция об этом
                            узнала только через два года. Что-то в этом мире
                            есть. Он очень повлиял на мое формирование. Но при
                            этом я читал Пастернака. Интересно, что в этом не
                            было противоречия. Ко мне приходили Череп, безногий
                            Колян, мы играли в карты, потом они уходили, а я
                            читал Пастернака. Я вел абсолютно хулиганский образ
                            жизни, у нас все время что-то происходило». Рыжие
                            жили на третьем этаже, и эти два лестничных пролета
                            были для Бориса своеобразным переходом из точки А —
                            домашнего уюта, безусловной любви — в точку Б — к
                            улице, сверстникам, которые жили совсем иначе.
                        </motion.p>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full h-full flex justify-center"
            >
                <div className="max-w-[1150px] w-full h-[700px] max-lg:h-[400px] relative max-md:h-[300px]">
                    <Image
                        src={"/images/bio/mask.png"}
                        alt="bio1"
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </motion.div>
            {/* 5 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col px-[30px] max-md:px-[10px] max-md:gap-[10px]">
                <div className="w-[50%] max-md:w-[85%] max-md:text-sm flex justify-end items-end space-y-[50px] max-lg:space-y-[20px] flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px]"
                    >
                        <p>
                            «Я знала мальчишек [с которыми гулял Боря]: они
                            часто приходили к нам домой, — говорит Ольга. —
                            Однажды я выглянула в окошко и увидела, как мальчики
                            ходят по кругу, а Боря с Димой стоят в центре. Я
                            потом спросила у Бори, что это была за игра. Он
                            ответил: “Мы были охранниками, а они —
                            заключенными”».
                        </p>
                        <p>
                            Обычный вечер у Рыжих: чаепитие, Боря гуляет. Вдруг
                            стук в дверь. «Открываем — там стоит милиционер и
                            Боря.{" "}
                            <b className="font-black text-accent">
                                {" "}
                                Милиционер
                            </b>{" "}
                            помялся и ушел. Оказалось, что Боря с компанией
                            сидел во дворе. К ним подошел милиционер, потребовал
                            вывернуть карманы. Все вывернули, а Боря — нет.
                            “Тогда пойдем к твоим родителям”. — “Пойдем”.
                            Возможно, милиционер думал, что Боря испугается, но
                            к моменту, когда они дошли до третьего этажа,
                            милиционер уже сам, видимо, был не рад
                            происходящему», — вспоминает Ольга.
                        </p>
                        <p>
                            Учился младший Рыжий тоже на Вторчермете, в 106-й
                            школе. «Она была совершенно ужасная, там резали друг
                            друга, выигрывали в карты какие-то бешеные суммы и
                            прочее», — рассказывал Борис журналистам. В другом
                            интервью без сожаления, даже с улыбкой, говорил о
                            школьных годах: «Били [меня] много. А как-то у нас
                            всех били, и все били кого-то. Меня били, я бил».
                        </p>
                    </motion.div>
                </div>
                <div className="w-[50%] max-md:w-[85%] max-md:text-sm flex justify-end space-y-[50px] max-lg:space-y-[20px] flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px]"
                    >
                        <p>
                            В{" "}
                            <b className="font-black text-accent">
                                {" "}
                                девяностые
                            </b>{" "}
                            в городе все стало только хуже: наркотики, драки,
                            смерти. На улице могли избить за адидасовский
                            костюм, сорвать меховую шапку с головы. В чужой двор
                            стоило заходить, только если знаешь местных. Но
                            парень из интеллигентной семьи на Вторчермете не
                            боялся никого.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Vtorchermet;
