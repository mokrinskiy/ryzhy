import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const End = () => {
    return (
        <div className="w-full px-[30px] pt-[10px] pb-[150px] max-md:p-[10px] h-auto justify-center items-center flex flex-col overflow-hidden">
            <Accordion type="multiple" className="max-w-[700px] px-[10px] ">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">
                        Кино
                    </AccordionTrigger>
                    <AccordionContent className="space-y-[20px]">
                        <p>
                            В 2008 году голландский режиссёр Алёна ван дер Хорст
                            сняла документальный фильм «Борис Рыжий», получивший
                            приз Silver Wolf на 21 Международном фестивале
                            документального кино в Амстердаме (IDFA) и приз за
                            лучший документальный фильм на Эдинбургском
                            кинофестивале 2009 года (Edinburgh’s International
                            Festival, EIFF).
                        </p>
                        <p>
                            С 2021 по 2024 год режиссёр Семён Серзин работал над
                            полнометражным художественным фильмом о поэте
                            «Рыжий». Главную роль в картине сыграл писатель и
                            музыкант Евгений Алёхин. Премьера фильма состоялась
                            на фестивале «Маяк» в октябре 2023 года. В
                            театральный прокат лента должна была выйти 12
                            сентября 2024 года, но ей отказали в выдаче
                            прокатного удостоверения.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl">
                        Мероприятия
                    </AccordionTrigger>
                    <AccordionContent className="space-y-[20px]">
                        <p>
                            С 5 по 8 сентября 2024 года в Екатеринбурге
                            организованы «Дни Бориса Рыжего» — серия
                            мероприятий, посвящённых 50-летию со дня рождения
                            поэта.
                        </p>
                        <p>
                            Ежегодно, совместно с Южно-Уральской Книжной
                            Ярмаркой, с 27 по 29 сентября проводится #РыжийФест
                            — всероссийский литературный фестиваль, где одно из
                            главных направлений — творчество Рыжего и творчество
                            о Рыжем.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">
                        Адреса
                    </AccordionTrigger>
                    <AccordionContent className="space-y-[20px]">
                        <p>
                            <strong>Челябинск</strong>
                        </p>
                        <p>1974—1980 — ул. Свободы, д. 149</p>
                        <p>
                            8 сентября 2014 года состоялось открытие памятной
                            доски Борису Рыжему (художник Л. Черкашин).
                        </p>
                        <p>
                            <strong>Екатеринбург</strong>
                        </p>
                        <p>1980—1991 — ул. Титова, д. 44</p>
                        <p>1991—1996 — ул. Шейнкмана, д. 108</p>
                        <p>1996—2001 — ул. Куйбышева, д. 10</p>
                        <p>
                            В сентябре 2020 года на Вторчермете возле дома, где
                            Борис Рыжий жил в детстве, была установлена
                            информационная табличка.
                        </p>
                        <p>
                            23 мая 2021 года состоялось открытие памятной доски
                            на здании редакции журнала «Урал».
                        </p>
                        <p>
                            31 августа 2024 года на линию в Екатеринбурге вышел
                            трамвай, украшенный его стихами и портретами.
                        </p>
                        <p>
                            В сентябре 2024 года сквер на улице Титова на
                            Вторчермете назвали именем Бориса Рыжего.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default End;
