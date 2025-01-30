import Image from "next/image";
import React from "react";

const Childhood = () => {
    return (
        <div className="w-full px-[30px] py-[150px] pt-[10px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[150px] bg-[url(/images/bio/childhood_bg.jpg)] bg-cover">
            {/* 1 */}
            <div className="w-full h-full flex justify-between gap-[150px]">
                <div className="w-[50%] flex justify-end items-end">
                    <div className="w-[500px] h-[400px] relative">
                        <Image
                            src={"/images/bio/bio2.jpg"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg">
                    <div className="flex gap-2 items-end">
                        <p className="text-accent font-black">часть 1.</p>
                        <p className="text-5xl">детство</p>
                    </div>
                    <div className="w-[500px] space-y-[20px]">
                        <p className="w-[500px]">
                            В «Евгении Онегине», который стоял в библиотеке
                            Рыжих, было записано четверостишие:
                        </p>
                        <p className="font-black text-xl">
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
            <div className="w-full h-full flex justify-between gap-[150px]">
                <div className="w-[50%] flex justify-end items-end space-y-[50px] flex-col">
                    <div className="w-[500px] space-y-[20px]">
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
                            атмосфера в семье была «тепличной».
                        </p>
                    </div>
                    <div className="w-[500px] h-[400px] relative">
                        <Image
                            src={"/images/bio/bio3.jpg"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                    <div className="w-[500px] space-y-[20px]">
                        <p>
                            Однажды маленький Боря играл в машинку, налив
                            «бензин» в стеклянную банку. Споткнувшись, он упал и
                            порезал лицо осколками. До глаза оставались
                            миллиметры. Ребенка срочно отвезли в больницу. Хотя
                            шов сделали неудачно, позже его исправили в
                            Челябинске.uэто стихотворение посвещено Борису
                            Петровичу Рыжему, отецу нашего героя. он был увлечен
                            поэзией, писал стихи, читал их в беседах,
                            декламировал детям на ночь. Любимым его поэтом был
                            Александр Блок.
                        </p>
                        <p>
                            Когда Борису исполнилось шесть лет, семья переехала
                            в Свердловск, обменяв квартиру в центре Челябинска
                            на жилье в районе Вторчермет. Соседями стали бывшие
                            заключенные, работавшие на местных заводах.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg"></div>
            </div>
        </div>
    );
};

export default Childhood;
