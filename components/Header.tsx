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
        <div className="w-full px-[30px] py-[10px] max-md:px-[10px] flex justify-end fixed z-30  items-center">
            {/* menubar */}
            <div className="flex gap-5">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon">
                            <AlignRight />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[10px] rounded-none">
                        <DropdownMenuItem>
                            <Link href={"/"}>Главная</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {menu_links.map((item, id) => (
                            <DropdownMenuItem key={id}>
                                <Link href={item.link}>{item.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
