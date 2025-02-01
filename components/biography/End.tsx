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
            <Accordion type="multiple" className="w-[700px]">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">
                        Кино{" "}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-[20px]">
                        <p>
                            В 2008 году голландский режиссёр Алёна ван дер Хорст
                            сняла документальный фильм «Борис Рыжий», получивший
                            приз Silver Wolf на 21 Международном фестивале
                            документального кино в Амстердаме (IDFA) и приз за
                            лучший документальный фильм на Эдинбургском
                            кинофестивале 2009 года (Edinburgh’s International
                            Festival, EIFF). Фильм снимался в Екатеринбурге, в
                            районе Вторчермета, где жил Борис Рыжий; режиссёр
                            встречалась с его семьёй, друзьями, соседями,
                            наблюдала за людьми на улицах, во дворах, магазинах
                            — за теми людьми, о которых писал поэт.{" "}
                        </p>
                        <p>
                            С 2021 по 2024 год режиссёр Семён Серзин работал над
                            полнометражным художественным фильмом о поэте
                            «Рыжий»[21]. Главную роль в картине сыграл писатель
                            и музыкант Евгений Алёхин. Премьера фильма
                            состоялась на фестивале актуального российского кино
                            «Маяк» в октябре 2023 года. В театральный прокат
                            лента должна была выйти 12 сентября 2024 года[22],
                            но ей отказали в выдаче прокатного
                            удостоверения[23].{" "}
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl">
                        Мероприятия{" "}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-[20px]">
                        <p>
                            С 5 по 8 сентября 2024 года в Екатеринбурге
                            организованы «Дни Бориса Рыжего» — серия
                            мероприятий, посвящённых 50-летию со дня рождения
                            поэта[42].{" "}
                        </p>{" "}
                        <p>
                            Ежегодно, совместно с Южно — уральской Книжной
                            Ярмаркой, с 27 по 29 сентября проводится #РыжийФест
                            — всероссийский литературный фестиваль, где одно из
                            главных направлений — творчество Рыжего и творчество
                            о Рыжем{" "}
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">
                        Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl">
                        Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-xl">
                        Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default End;
