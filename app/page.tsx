"use client";
import { Button } from "@/components/ui/button";
import { menu_links } from "@/content/menu_links";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen max-lg:h-auto py-[10px] flex flex-col md:justify-between">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl max-lg:text-3xl max-md:text-base max-md:hidden px-[30px] max-md:px-[10px]"
            >
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
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative bottom-20 -z-10 left-0 right-0 m-auto my-0 max-md:top-[50px] h-[430px] w-[650px] max-md:h-[400px] max-md:w-full"
            >
                <Image
                    src={"/images/main_image.png"}
                    alt="main_image"
                    className="object-cover"
                    fill={true}
                    sizes="auto"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute top-[50%] left-[10%] max-md:top-[28%] max-md:hidden px-[30px] max-md:px-[10px] z-50"
            >
                <p className="font-black text-accent max-md:text-sm">
                    [ русский поэт ]
                </p>
                <div className="flex gap-2 items-end max-md:text-sm">
                    <p className="text-gray text-sm">годы:</p>
                    <p>1974 — 2001</p>
                </div>
            </motion.div>
            <div className="w-full justify-between flex items-center max-lg:items-start md:px-[5%] py-[10px] max-lg:flex-col max-md:mt-[90px] max-md:px-[5px]">
                <img
                    className="md:hidden max-md:px-4"
                    src="images/main_text.svg"
                    alt=""
                />
                <div className="md:hidden w-full flex flex-col mt-[20px] max-md:px-4 z-50">
                    <p className="font-black text-accent max-md:text-sm">
                        [ русский поэт ]
                    </p>
                    <div className="flex gap-2 items-end max-md:text-sm">
                        <p className="text-gray text-sm">годы:</p>
                        <p>1974 — 2001</p>
                    </div>
                </div>
                <div className="flex justify-between text-xl gap-x-5 max-lg:flex-col max-md:mt-[20px]">
                    {menu_links.map((item, id) => (
                        <Link key={id} href={item.link}>
                            <Button
                                variant="ghost"
                                className="text-xl max-md:text-xl"
                            >
                                {item.title}
                            </Button>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center min-w-[100px] w-auto h-auto">
                    <Button
                        variant="ghost"
                        className="text-xl text-accent hover:text-white"
                    >
                        <p className=" text-sm font-black">о сайте</p>
                    </Button>
                </div>
            </div>
        </div>
    );
}
