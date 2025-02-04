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
    type: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, type }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {type === "landscape" ? (
                    <div className="max-w-[500px] w-full h-[300px] relative max-lg:h-[250px] max-md:h-[250px]">
                        <Image
                            src={src}
                            alt={alt}
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                ) : (
                    <div className="max-w-[500px] w-full h-[600px] relative max-lg:h-[500px] max-md:h-[500px]">
                        <Image
                            src={src}
                            alt={alt}
                            sizes="auto"
                            className="object-cover aspect-video"
                            fill={true}
                        />
                    </div>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        {type === "landscape" ? (
                            <div className="max-w-[500px] w-full h-[300px] relative max-lg:h-[250px] max-md:h-[250px]">
                                <Image
                                    src={src}
                                    alt={alt}
                                    sizes="auto"
                                    className="object-cover aspect-video"
                                    fill={true}
                                />
                            </div>
                        ) : (
                            <div className="max-w-[500px] w-full h-[600px] relative max-lg:h-[500px] max-md:h-[500px]">
                                <Image
                                    src={src}
                                    alt={alt}
                                    sizes="auto"
                                    className="object-cover aspect-video"
                                    fill={true}
                                />
                            </div>
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default GalleryItem;
