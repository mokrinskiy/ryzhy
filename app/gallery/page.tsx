import React from "react";
import GalleryItem from "@/components/GalleryItem";
import Image from "next/image";

const images = [
    { src: "/images/bio/bio1.jpg", alt: "Image 1", type: "landscape" },
    { src: "/images/bio/bio5.jpg", alt: "Image 5", type: "portrait" },
    { src: "/images/bio/bio3.jpg", alt: "Image 3", type: "landscape" },
    { src: "/images/bio/bio4.jpg", alt: "Image 4", type: "portrait" },
    { src: "/images/bio/bio6.jpg", alt: "Image 6", type: "portrait" },
    { src: "/images/bio/bio1.jpg", alt: "Image 1", type: "landscape" },
];

const page = () => {
    return (
        <div className="gap-4 py-[30px] px-[10%] max-md:px-[10px] max-md:gap-2 grid grid-cols-2 w-full items-center justify-center">
            {images.map((image, id) => (
                <GalleryItem
                    src={image.src}
                    id={id}
                    alt={image.alt}
                    type={image.alt}
                />
            ))}
        </div>
    );
};

export default page;
