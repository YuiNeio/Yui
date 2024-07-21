import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
                <div className="flex flex-wrap">
                    <div className="px-6 lg:w-3/4 w-1/2 self-center">
                        <Link href="/" className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            <img color="primary"  alt="profile itc" src={"https://telegra.ph/file/1b49e4d2f46c15597554b.jpg"} className="inline rounded-full lg:w-[50px] w-[30px] border-2 border-boxColor" />
                            <span className="ml-2">NatzNvr</span>
                        </Link>
                    </div>
                    <div className="lg:px-12 px-3 lg:w-1/4 w-1/2 space-x-2 lg:space-x-8 self-center">
                        <Link href={"/profile"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            Owner & Bot
                        </Link>                      
                    </div>
                </div>
            </div>
        </div>
    )
}
