import { poems } from "@/content/poems";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="space-y-[70px] px-[30px] max-md:p-[10px] py-[50px] z-1 flex justify-center items-center flex-col w-full">
            {poems.map((poem) => (
                <Link
                    className="group max-w-[600px] w-full flex justify-between hover:cursor-pointer hover:bg-accent hover:text-white transition-colors p-[10px]"
                    href={`poems/${poem.id}`}
                    key={poem.title}
                >
                    <div>
                        <h1 className="text-xl border-b-[1px] border-accent group-hover:border-white max-md:text-lg pr-3 pb-2">
                            {poem.title}
                        </h1>
                        <p className="text-sm text-right mt-[10px] pr-3 max-md:text-xs">
                            {poem.text.slice(0, 100)}...
                        </p>
                    </div>
                    <div className="w-[100px] min-w-[40px] font-light flex justify-center items-center border-[1px] border-accent group-hover:border-white ">
                        <p className="text-xl font-thin max-md:text-base">{poem.id}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default page;
