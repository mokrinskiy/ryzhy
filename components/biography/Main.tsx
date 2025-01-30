import Image from "next/image";
import React from "react";

const Main = () => {
    return (
        <div className="w-full h-screen px-[30px] pt-[10px] max-md:p-[10px] flex flex-col overflow-hidden gap-y-[50px]">
            <div>
                <div className="flex items-start">
                    <p className="text-accent font-black">[ биография ]</p>
                    <p className="text-5xl ml-[300px]">БОРИС РЫЖИЙ</p>
                </div>
                <div className="flex flex-col text-5xl">
                    <p>писал о любви, жизни в спальных</p>
                    <p>районах, ностальгии и личных</p>
                    <p>переживаниях.</p>
                </div>
            </div>
            <div className="w-full h-full flex justify-between gap-[150px]">
                <div className="w-[50%] flex justify-end items-end">
                    <div className="mr-[50px] text-xl flex justify-end flex-col">
                        <p>01. детство</p>
                        <p>02. вторчермет</p>
                        <p>03. семья</p>
                        <p>04. изгнанник</p>
                        <p>05. стихи</p>
                        <p>06. архив</p>
                    </div>
                </div>
                <div className="w-[50%] min-h-full flex gap-y-[50px] flex-col text-lg">
                    <p className="w-[500px]">
                        РЫЖИЙ начал писать стихи в юности и вскоре стал заметной
                        фигурой. Его творчество сочетает классическую форму
                        стихосложения с{" "}
                        <b className="text-accent font-black">уличной</b> и
                        городской тематикой, передавая атмосферу 1990-х годов в
                        России.
                    </p>
                    <div className="w-[500px] h-full relative">
                        <Image
                            src={"/images/bio/bio1.png"}
                            alt="bio1"
                            sizes="auto"
                            className="object-cover"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
