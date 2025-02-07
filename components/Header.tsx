import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "./ModeToogle";
import { Button } from "./ui/button";
import Link from "next/link";
import { menu_links } from "@/content/menu_links";

const Header = () => {
    return (
        <div className="w-full px-[30px] py-[10px] max-md:px-[10px] flex justify-end fixed  items-center z-10">
            {/* menubar */}
            <div className="flex gap-5 ">
                <DropdownMenu>
                    <DropdownMenuTrigger className="">
                        <Button className="" variant="ghost" size="icon">
                            <AlignRight className="" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[10px] rounded-none">
                        <Link className="hover:cursor-pointer" href={"/"}>
                            <DropdownMenuItem className="hover:cursor-pointer">Главная</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        {menu_links.map((item, id) => (
                            <Link
                                href={item.link}
                                className="hover:cursor-pointer"
                                key={id}
                            >
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    {item.title}{" "}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
