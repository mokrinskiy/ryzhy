import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-[5px] px-[30px] max-md:p-[10px] flex justify-between bg-zinc-950">
            <div className="flex gap-5 flex-row items-center">
                <p className="opacity-50 text-sm max-md:text-xs">
                    &copy; {new Date().getFullYear()}
                </p>
                <p className="text-sm opacity-50 max-md:text-xs">
                    Made with 🤍 just for fun
                </p>
            </div>
            <div className="flex gap-5 flex-row items-center max-md:text-xs text-sm opacity-50">
                <Link href={"https://t.me/mokrinskiy"} target="_blank">
                    Tg
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
