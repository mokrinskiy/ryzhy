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
        <div className="w-full px-[30px] py-[10px] max-md:px-[10px] flex justify-end fixed  items-center">
            {/* menubar */}
            <div className="flex gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger className="z-50">
                        <Button className="z-50" variant="ghost" size="icon">
                            <AlignRight className="z-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[10px] rounded-none">
                        <DropdownMenuItem>
                            <Link href={"/"}>Главная</Link>
                        </DropdownMenuItem>
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
