import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const links = [
    { title: "Стихотворения", link: "/" },
    { title: "Биография", link: "/biography" },
    { title: "Галерея", link: "/gallery" },
    { title: "Ключевые даты", link: "/" },
];

export default function Home() {
    return (
        <div className="px-[30px] max-md:px-[10px] flex items-center flex-col min-h-[100vh] max-lg:pt-[40px]">
            <div className="flex justify-center max-lg:w-full w-[55%] flex-col items-center bg-[url('/images/main_bg.png')] bg-cover lg:p-20 max-lg:p-10 max-lg:px-20 bg-center">
                {/* years */}
                <div className="flex justify-center items-center flex-col mb-5">
                    <p className="text-xs opacity-50">ГОДЫ:</p>
                    <p className="max-md:text-sm">1974 — 2001</p>
                </div>
                <div className="w-[40%] max-lg:w-[60%] flex justify-center">
                    <Image
                        width={400}
                        height={300}
                        className="object-cover"
                        src={`/images/main_image.png`}
                        layout="responsive"
                        alt="gallery-image-6"
                    />
                </div>
                <div className="relative flex flex-col items-center w-full max-lg:">
                    <h1 className="text-[4.5vw] absolute -top-14 max-lg:-top-10 max-md:-top-6 max-md:text-2xl">
                        БОРИС РЫЖИЙ
                    </h1>
                    <p className="absolute max-lg:mt-4 max-md:mt-2 mt-8 underline text-sm text-black">
                        РУССКИЙ ПОЭТ
                    </p>
                </div>
            </div>
            {/* links */}
            <div className="flex justify-center w-full items-center mt-10  text-lg gap-[5vw] mb-5 max-md:gap-1 max-md:flex-col max-md:py-5">
                {links.map((item, id) => (
                    <Link key={id} href={item.link}>
                        <Button variant="ghost" className="text-lg">
                            {item.title}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
