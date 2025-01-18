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
    image: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-full relative h-auto border-2 border-white cursor-pointer">
                    <Image
                        width={450}
                        height={300}
                        className="object-cover"
                        src={`/images/${image}`}
                        layout="responsive"
                        alt="gallery-image-6"
                        priority={true}
                    />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <Image
                            width={450}
                            height={300}
                            className="object-cover"
                            src={`/images/${image}`}
                            layout="responsive"
                            alt="gallery-image-6"
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default GalleryItem;
