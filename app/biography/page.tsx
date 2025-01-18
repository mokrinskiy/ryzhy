import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const sections_buttons = [
    "Детство и юность",
    "Творчество Бориса Рыжего",
    "Личная жизнь",
    "Смерть Бориса Рыжего",
    "В культуре",
    "Интересные факты",
];

const page = () => {
    return (
        <div className="w-full px-[30px] max-md:px-[10px] pt-[60px] flex gap-2 min-h-[100vh] max-lg:flex-col-reverse pb-5">
            <div className="w-[50%] max-lg:w-full flex justify-between flex-col">
                <div>
                    <p className="max-md:text-xs">Русский поэт и геолог</p>
                </div>
                <div className="w-full flex items-start gap-10 justify-end flex-col mb-0.5">
                    <div>
                        <h1 className="max-md:text-xs">Борис Рыжий</h1>
                        <h1 className="text-5xl max-md:text-3xl">Биография</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-[70%] max-md:w-[90%]">
                        {sections_buttons.map((item, id) => (
                            <Button
                                key={id}
                                variant="ghost"
                                className="w-full flex justify-between border-b-2 border-current rounded-none px-2"
                            >
                                <p className="text-[20px] max-md:text-base">
                                    {item}
                                </p>
                                <p className="text-[20px] font-bold max-md:text-base">
                                    {id + 1}
                                </p>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex max-lg:w-full items-end">
                <div className="relative w-full h-[500px] max-md:h-[350px]">
                    <Image
                        layout="fill"
                        className="object-cover"
                        src={`/images/main_biography.jpg`}
                        alt="gallery-image-6"
                        priority={true} 
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
