import { Button } from "@/components/ui/button";
import { menu_links } from "@/content/menu_links";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen px-[30px] py-[10px] max-md:p-[10px] flex flex-col justify-between overflow-hidden">
            <div className="text-5xl z-10">
                <p>“В России расстаются навсегда.</p>
                <div className="w-full flex justify-center">
                    <p>В России друг от друга города</p>
                </div>
                <div className="w-full flex justify-center">
                    <p>столь далеки,</p>
                </div>
                <div className="w-full flex justify-end">
                    <p>что вздрагиваю я, шепнув «прощай».”</p>
                </div>
                <div className="w-full flex justify-end">
                    <p>БориС РЫЖИЙ</p>
                </div>
            </div>
            <div className="relative bottom-20 z-0 left-0 right-0 m-auto my-0 h-[430px] w-[650px]">
                <Image
                    src={"/images/main_image.png"}
                    alt="main_image"
                    className="object-cover"
                    fill={true}
                    sizes="auto"
                />
            </div>
            <div className="absolute top-[50%] left-[10%]">
                <p className="font-black text-accent">[ русский поэт ]</p>
                <div className="flex gap-2 items-end">
                    <p className="text-gray text-sm">годы:</p>
                    <p>1974 — 2001</p>
                </div>
            </div>
            <div className="w-full justify-between flex items-center px-[5%] py-[10px]">
                <div className="flex justify-between text-xl gap-x-5">
                    {menu_links.map((item, id) => (
                        <Link key={id} href={item.link}>
                            <Button variant="ghost" className="text-xl">
                                {item.title}
                            </Button>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center min-w-[100px] w-auto h-auto">
                    <Button
                        variant="ghost"
                        className="text-xl hover:text-transparent"
                    >
                        <p className="text-accent text-sm font-black">
                            о сайте
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    );
}
