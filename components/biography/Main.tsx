import Image from "next/image";
import React from "react";

const Main = () => {
    return (
        <div className="w-full md:h-screen px-[30px] pt-[10px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[50px] max-md:gap-y-[50px]">
            <div>
                <div className="flex items-center">
                    <p className="text-accent font-black w-auto max-md:text-xs">
                        [ биография ]
                    </p>
                    <p className="text-5xl ml-[300px] max-md:ml-[50px] max-md:text-2xl">
                        БОРИС РЫЖИЙ
                    </p>
                </div>
                <div className="flex flex-col text-5xl max-md:text-2xl">
                    <p>писал о любви, жизни в спальных</p>
                    <p>районах, ностальгии и личных</p>
                    <p>переживаниях.</p>
                </div>
            </div>
            <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[50px] max-md:flex-col max-md:items-end">
                <div className="w-[50%] flex justify-end items-end max-md:hidden">
                    <div className=" text-xl flex justify-end flex-col max-md:text-base">
                        <a className="hover:underline" href="#1">
                            01. детство
                        </a>
                        <a className="hover:underline" href="#2">
                            02. вторчермет
                        </a>
                        <a className="hover:underline" href="#3">
                            03. семья
                        </a>
                        <a className="hover:underline" href="#4">
                            04. изгнанник
                        </a>
                        <a className="hover:underline" href="#5">
                            05. стихи
                        </a>
                        <a className="hover:underline" href="#6">
                            06. архив
                        </a>
                    </div>
                </div>
                <div className="w-[50%] max-md:w-[85%] min-h-full flex gap-y-[50px] flex-col text-lg max-md:text-sm max-md:gap-y-[50px]">
                    <p className="w-full max-w-[500px]">
                        РЫЖИЙ начал писать стихи в юности и вскоре стал заметной
                        фигурой. Его творчество сочетает классическую форму
                        стихосложения с{" "}
                        <b className="text-accent font-black">уличной</b> и
                        городской тематикой, передавая атмосферу 1990-х годов в
                        России.
                    </p>
                    <div className="h-full max-md:h-[300px] relative w-full max-w-[500px] max-md:hidden">
                        <Image
                            src={"/images/bio/bio1.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover"
                            fill={true}
                        />
                    </div>
                </div>
                <div className="w-full h-full flex justify-center md:hidden">
                    <div className="max-w-[1150px] w-full h-[700px] relative max-md:h-[300px]">
                        <Image
                            src={"/images/bio/bio1.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="w-[85%] flex justify-start items-end md:hidden">
                <div className=" text-xl flex justify-end flex-col max-md:text-base">
                    <p>01. детство</p>
                    <p>02. вторчермет</p>
                    <p>03. семья</p>
                    <p>04. изгнанник</p>
                    <p>05. стихи</p>
                    <p>06. архив</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
