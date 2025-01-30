import Image from "next/image";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface GalleryItemProps {
    src: string;
    alt: string;
    id: number;
    type: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, id, type }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    key={id}
                    className={`shadow-md flex items-center ${
                        type === "landscape" ? "" : "aspect-[3/4]"
                    }`}
                >
                    <Image
                        src={src}
                        alt={alt}
                        layout="responsive"
                        width={450}
                        height={650}
                        objectFit="cover"
                    />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <Image
                            src={src}
                            alt={alt}
                            layout="responsive"
                            width={450}
                            height={650}
                            objectFit="cover"
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default GalleryItem;
