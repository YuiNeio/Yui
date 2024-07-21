import React from "react";
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import CardProfile from "@/lib/forCard";

export default function ProfileSection() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-8">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">manager </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./print.o</span></h1>
                        </a>
                    </div>
                    <div className="px-6 grid grid-cols-1 gap-4 lg:grid-cols-3 pt-5">
                        
                        <CardProfile Name="NatzNvr" Uname="@nattafly" Desc="
                        Pemilik Bot whatsapp NatzNvr👋" Color="danger" Image="https://media.discordapp.net/attachments/1125397316971528272/1140492754703614042/7ac1b4ed-125c-4e4b-9fd1-d9174b8e1808.png?width=255&height=453" Jobs="#TinjuDibalasTinju" LinkIG="https://instagram.com/nattafly" TTL="Not Found"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
