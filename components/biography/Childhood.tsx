import Image from "next/image";
import React from "react";

const Childhood = () => {
    return (
        <div id="1" className="w-full px-[30px] py-[250px] max-md:p-[10px] flex flex-col overflow-hidden max-lg:gap-[50px] gap-y-[150px] bg-center bg-[url(/images/bio/childhood_bg.png)] bg-cover">
            {/* 1 */}
            <div className="w-full h-full max-md:items-end flex justify-between gap-[150px] max-lg:gap-[50px] max-md:flex-col-reverse">
                <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-end flex-col text-sm font-black">
                    <div className="max-w-[500px] w-full h-[400px] relative max-md:h-[250px]">
                        <Image
                            src={"/images/bio/bio2.jpg"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                    <p className="max-w-[500px] w-full">
                        Маргарита и Борис Рыжие
                    </p>
                </div>
                <div className="w-[50%] max-md:w-[85%] min-h-full flex gap-y-[50px] max-md:gap-[20px] flex-col text-base">
                    <div className="flex gap-2 items-end">
                        <p className="text-accent font-black">часть 1.</p>
                        <p className="text-5xl max-lg:text-3xl">детство</p>
                    </div>
                    <div className="space-y-[20px] max-w-[500px] w-full max-md:text-sm">
                        <p>
                            В «Евгении Онегине», который стоял в библиотеке
                            Рыжих, было записано четверостишие:
                        </p>
                        <p className="font-black text-lg max-md:text-base">
                            «Масти разной шел поэт, От Белого до Черного. Чтобы
                            полный был синклит, Не хватает Рыжего».
                        </p>
                        <p>
                            это стихотворение посвещено Борису Петровичу Рыжему,
                            отецу нашего героя. он был увлечен поэзией, писал
                            стихи, читал их в беседах, декламировал детям на
                            ночь. Любимым его поэтом был Александр Блок.
                        </p>
                        <p>
                            Со своей женой Маргаритой Михайловной Борис Петрович
                            познакомился еще в школе. Уже в шестом классе он
                            знал, что они поженятся. Боря приходил раньше, чтобы
                            занять место за одной партой с Ритой.
                        </p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:items-start max-md:flex-col">
                <div className="w-[50%] max-md:w-[85%] flex justify-end items-end space-y-[50px] flex-col max-md:space-y-[20px]">
                    <div className="max-w-[500px] w-full space-y-[20px] max-md:text-sm ">
                        <p>
                            Маргарита была старше Бориса на два года. В детстве
                            её с матерью пленили немцы и угнали в Германию.
                            После освобождения она быстро догнала сверстников,
                            стала отличницей и занималась в кружках.
                        </p>
                        <p>
                            Борис Петрович стал геофизиком, а Маргарита
                            Михайловна — врачом-эпидемиологом. У них родились
                            две дочери, Лена и Оля, а спустя 11 лет появился
                            Боря — долгожданный сын.
                        </p>
                        <p>
                            Родители и сестры души не чаяли в мальчике. Ольга
                            вспоминала, что их никогда не наказывали, а
                            атмосфера в семье была{" "}
                            <b className="font-black text-accent">
                                «тепличной»
                            </b>
                            .
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-[5px] items-end text-sm font-black w-full">
                        <div className="max-w-[500px] w-full h-[400px] relative max-md:h-[250px]">
                            <Image
                                src={"/images/bio/bio3.jpg"}
                                alt="bio1"
                                sizes="auto"
                                className="object-cover aspect-video"
                                fill={true}
                            />
                        </div>
                        <p className="max-md:text-xs">Борис с мамой и сестрами</p>
                    </div>
                    <div className="space-y-[20px] max-w-[500px] w-full max-md:text-sm">
                        <p>
                            Однажды маленький Боря играл в машинку, налив
                            «бензин» в стеклянную банку. Споткнувшись, он упал и
                            порезал лицо осколками. До глаза оставались
                            миллиметры. Ребенка срочно отвезли в больницу. Хотя
                            шов сделали неудачно, позже его исправили в
                            Челябинске.
                        </p>
                        <p>
                            Когда Борису исполнилось шесть лет, семья переехала
                            в Свердловск, обменяв квартиру в центре Челябинска
                            на жилье в районе{" "}
                            <b className="font-black text-accent">Вторчермет</b>
                            . Соседями стали бывшие заключенные, работавшие на
                            местных заводах.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex md:visible gap-y-[50px] flex-col text-lg"></div>
            </div>
        </div>
    );
};

export default Childhood;
