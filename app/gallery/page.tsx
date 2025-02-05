import React from "react";
import GalleryItem from "@/components/GalleryItem";
import Image from "next/image";

const images = [
    { src: "/images/gallery/g_1.jpg", alt: "Image 1", type: "portrait" },
    { src: "/images/gallery/g_2.jpg", alt: "Image 2", type: "landscape" },
    { src: "/images/gallery/g_3.jpg", alt: "Image 3", type: "landscape" },
    { src: "/images/gallery/g_4.jpg", alt: "Image 4", type: "portrait" },
    { src: "/images/gallery/g_5.jpg", alt: "Image 5", type: "" },
    { src: "/images/gallery/g_6.jpg", alt: "Image 6", type: "portrait" },
    { src: "/images/gallery/g_7.jpg", alt: "Image 7", type: "landscape" },
    { src: "/images/gallery/g_8.jpg", alt: "Image 8", type: "portrait" },
    { src: "/images/gallery/g_9.jpg", alt: "Image 9", type: "portrait" },
    { src: "/images/gallery/g_10.jpg", alt: "Image 10", type: "landscape" },
    { src: "/images/gallery/g_11.jpg", alt: "Image 11", type: "portrait" },
    { src: "/images/gallery/g_12.jpg", alt: "Image 12", type: "landscape" },
    { src: "/images/gallery/g_13.jpg", alt: "Image 13", type: "landscape" },
    { src: "/images/gallery/g_14.jpg", alt: "Image 14", type: "portrait" },
    { src: "/images/gallery/g_15.jpg", alt: "Image 15", type: "portrait" },
    { src: "/images/gallery/g_16.jpg", alt: "Image 16", type: "portrait" },
    { src: "/images/gallery/g_17.jpg", alt: "Image 16", type: "portrait" },
    { src: "/images/gallery/g_18.jpg", alt: "Image 16", type: "landscape" },
    { src: "/images/gallery/g_19.jpg", alt: "Image 16", type: "portrait" },
];

const page = () => {
    return (
        <div className="space-y-[200px]">
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px] bg-center bg-[url(/images/gallery/bg_1.jpg)] bg-cover">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[0].src}
                            alt={images[0].src}
                            type={images[0].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[1].src}
                            alt={images[1].src}
                            type={images[1].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px]">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[2].src}
                            alt={images[2].src}
                            type={images[2].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[3].src}
                            alt={images[3].src}
                            type={images[3].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] h-full flex justify-center">
                <div className="max-w-[1150px] w-full h-[700px] relative max-md:h-[300px]">
                    <Image
                        src={images[4].src}
                        alt={images[4].src}
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px]">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[5].src}
                            alt={images[5].src}
                            type={images[5].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[6].src}
                            alt={images[6].src}
                            type={images[6].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px] bg-center bg-[url(/images/gallery/bg_2.jpg)] bg-cover">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[7].src}
                            alt={images[7].src}
                            type={images[7].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[8].src}
                            alt={images[8].src}
                            type={images[8].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-full px-[30px] max-md:px-[15px]flex justify-center">
                <div className="max-w-[1150px] w-full h-[700px] relative max-md:h-[300px]">
                    <Image
                        src={images[9].src}
                        alt={images[9].src}
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px]">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[10].src}
                            alt={images[10].src}
                            type={images[10].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[11].src}
                            alt={images[11].src}
                            type={images[11].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px]  bg-center bg-[url(/images/gallery/bg_3.jpg)] bg-cover">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[12].src}
                            alt={images[12].src}
                            type={images[12].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[13].src}
                            alt={images[13].src}
                            type={images[13].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px]">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[14].src}
                            alt={images[14].src}
                            type={images[14].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[15].src}
                            alt={images[15].src}
                            type={images[15].type}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-full px-[30px] max-md:px-[15px] flex justify-center">
                <div className="max-w-[1150px] w-full h-[700px] relative max-md:h-[300px]">
                    <Image
                        src={images[16].src}
                        alt={images[16].src}
                        sizes="auto"
                        className="object-cover aspect-video"
                        fill={true}
                    />
                </div>
            </div>
            <div className="w-full px-[30px] max-md:px-[15px] py-[120px] max-lg:py-[100px] bg-center bg-[url(/images/gallery/bg_4.jpg)] bg-cover">
                <div className="w-full h-full flex justify-between gap-[150px] max-lg:gap-[50px] max-md:gap-[20px] max-md:flex-col">
                    <div className="w-[50%] max-md:w-full max-md:items-center flex justify-end items-center max-md:justify-center">
                        <GalleryItem
                            src={images[17].src}
                            alt={images[17].src}
                            type={images[17].type}
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full max-md:justify-center max-md:items-center flex justify-start items-center">
                        <GalleryItem
                            src={images[18].src}
                            alt={images[18].src}
                            type={images[18].type}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
