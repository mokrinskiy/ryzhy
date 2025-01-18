import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "./ModeToogle";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full px-[30px] py-[10px] max-md:px-[10px] flex justify-between fixed z-30  items-center">
            {/* logo */}
            <Link
                href={"/"}
                className="w-[30px] max-md:h-[15px] max-md:w-[15px] h-[30px] bg-[#569940] rounded-full"
            />
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
                        <DropdownMenuItem>Стихотворения</DropdownMenuItem>
                        <DropdownMenuItem>Биография</DropdownMenuItem>
                        <DropdownMenuItem>Галерея</DropdownMenuItem>
                        <DropdownMenuItem>Важные даты</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
