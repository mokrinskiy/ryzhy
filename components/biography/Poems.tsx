import Image from "next/image";
import React from "react";

const Poems = () => {
    return (
        <div className="w-full max-lg:gap-[50px] px-[30px] py-[250px] max-md:p-[10px] flex flex-col overflow-hidden bg-center gap-y-[150px] bg-[url(/images/bio/poems_bg.png)] bg-cover">
            {/*1*/}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px]">
                <div className="w-[50%] flex items-end flex-col space-y-[50px]">
                    <div className="flex gap-2 items-end">
                        <p className="text-accent font-black">часть 5.</p>
                        <p className="text-5xl">стихи</p>
                    </div>
                    <div className="max-w-[500px] w-full space-y-[20px]">
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
                    </div>
                    <div className="h-[400px] relative max-w-[500px] w-full">
                        <Image
                            src={"/images/bio/bio12.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-[20px] max-w-[500px] w-full">
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
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg"></div>
            </div>
            {/*2*/}
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px]">
                <div className="w-[50%] flex items-end flex-col gap-y-[5px] text-sm font-black">
                    <div className="h-[600px] relative max-w-[500px] w-full">
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
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg">
                    <div className="max-w-[500px] w-full space-y-[20px]">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poems;
