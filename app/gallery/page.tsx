import React from "react";
import GalleryItem from "@/components/GalleryItem";

const images = [
    {
        id: 1,
        src: "photo1.jpg",
    },
    {
        id: 2,
        src: "photo2.jpg",
    },
    {
        id: 3,
        src: "photo2.jpg",
    },
    {
        id: 4,
        src: "photo1.jpg",
    },
];

const page = () => {
    return (
        <div className="w-full px-[30px] py-[10px] flex gap-[30px]">
            <div className="flex flex-col gap-[25px] max-md:gap-[10px] h-auto">
                {images.map((item) => (
                    <div key={item.id}>
                        <GalleryItem image={item.src} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[25px] max-md:gap-[10px] h-auto">
                {images.map((item) => (
                    <div key={item.id}>
                        <GalleryItem image={item.src} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[25px] max-md:gap-[10px] h-auto">
                {images.map((item) => (
                    <div key={item.id}>
                        <GalleryItem image={item.src} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
