import Image from "next/image";
import React from "react";

const Family = () => {
    return (
        <div className="w-full px-[30px] max-lg:gap-[50px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[150px] bg-center bg-[url(/images/bio/family_bg.png)] py-[250px] max-lg:py-[100px] bg-cover">
            {/* 1 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col">
                <div className="w-[50%] max-md:w-full flex justify-end max-md:justify-center">
                    <div className="max-w-[500px] w-full h-[400px] max-lg:h-[300px] relative">
                        <Image
                            src={"/images/bio/bio7.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                </div>
                <div className="w-[50%] max-md:w-full min-h-full flex gap-y-[50px] max-lg:gap-y-[20px] flex-col text-lg max-lg:text-base">
                    <div className="flex gap-2 items-end">
                        <p className="text-accent font-black">часть 3.</p>
                        <p className="text-5xl max-lg:text-3xl">семья</p>
                    </div>
                    <div className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px]">
                        <p>
                            «Первая любовь у меня закончилась удачно. Это была
                            школьница Ирина, которая стала впоследствии моей
                            супругой и родила мне замечательного сына Артема.
                            Всю жизнь любил эту женщину, эту девочку. Когда я ее
                            повстречал, когда увидел впервые, сразу полюбил. И,
                            слава Богу, уже восемь лет мы с ней живем и все
                            очень хорошо».
                        </p>

                        <p>
                            Борис познакомился с Ириной Князевой в школе — с
                            10-го класса они учились вместе. Он долго не
                            показывал ей своих чувств, ему «было достаточно
                            видеть». К концу 11-го понял, что нужно действовать.
                            Они начали встречаться, и Рыжий сделал Ирине
                            предложение. «Не всем дано любить, а ему было дано,
                            — говорит Ирина. — Меня всегда удивляло, как{" "}
                            <b className="text-accent font-black"> человек </b>
                            может испытывать такие безумные чувства».
                        </p>
                        <p>
                            «Я помню, как в младшей школе Боре звонили девочки,
                            писали ему записки: “Боря, я тебя люблю”, —
                            вспоминает Ольга. — Меня смешило, как он с ними
                            разговаривал по телефону. “В кино? Не пойду я с
                            тобой в кино. Зачем? Мне что, больше не с кем в кино
                            ходить?” А Ирина появилась в его жизни и осталась
                            навсегда».
                        </p>
                        <p>
                            Они поженились в декабре 1991 года. За несколько
                            месяцев до свадьбы Рыжего сильно избили на улице:
                            ударили сзади кастетом по голове, раздели.
                            Восстанавливался он очень долго, даже на свадебных
                            фотографиях заметны следы побоев.
                        </p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="w-full h-full flex justify-center">
                <div className="max-w-[1150px] w-full h-[700px] max-lg:h-[400px] relative">
                    <Image
                        src={"/images/bio/bio8.png"}
                        alt="bio1"
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </div>
            {/* 3 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col">
                <div className="w-[50%] max-md:w-full flex justify-end items-end space-y-[50px] max-lg:space-y-[20px] flex-col">
                    <div className="max-w-[500px] w-full space-y-[20px] max-lg:space-y-[10px]">
                        <p>
                            И Ирина, и Борис отучились в Горном, поступили в
                            аспирантуру. Рыжий пошел учиться в Горный под
                            влиянием отца и потом устроился работать в Институт
                            геофизики младшим научным сотрудником. «Да, учусь в
                            аспирантуре, чтобы отмазаться от армии, — говорил он
                            в интервью. — У меня есть жена и сын, я не могу
                            пойти служить и оставить их одних. Выбирать между
                            поэзией и наукой мне не нужно. Не хочу быть
                            геофизиком и не хочу работать в Академии наук».
                        </p>
                        <p>
                            Жили они{" "}
                            <b className="font-black text-accent"> скромно</b>,
                            постоянно подрабатывали: Ирина — дома с проектами по
                            вечерам, Борис — на стоянке сторожем по ночам.
                            Вместе ездили два раза в Петербург, дальше не
                            получалось — не было денег.
                        </p>
                        <p>
                            Сначала молодые жили с Маргаритой Михайловной и
                            Борисом Петровичем, а потом переехали в отдельную
                            квартиру. Но Борис все равно ходил к родителям
                            ежедневно — очень переживал за них, особенно за
                            отца: в 1991 году у него случился инфаркт, и сын
                            боялся второго. Родители переживали за Бориса не
                            меньше.
                        </p>
                        <p>
                            Сын Артем родился у них в 1993 году — Ирине тогда
                            было 19, Борису — 18. Борис принимал полноценное
                            участие в жизни сына: готовил, играл, гулял с ним в
                            Зеленой роще.
                        </p>
                        <p>
                            Борис и Ирина, по сути, вместе росли: учились в
                            школе, потом в университете, пытались выживать в
                            голодные девяностые, воспитывали ребенка. Ирина
                            видела его не только веселым, но и выдохшимся, в
                            <b className="font-black text-accent"> депрессии</b>
                            .
                        </p>
                    </div>
                </div>
                <div className="w-[50%] max-md:w-full flex justify-end max-md:justify-center space-y-[50px] max-lg:space-y-[20px] flex-col">
                    <div className="max-w-[500px] w-full h-[400px] max-lg:h-[300px] relative">
                        <Image
                            src={"/images/bio/bio9.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;