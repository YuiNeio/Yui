import Image from "next/image"
import React from "react"
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import Link from "next/link"

export default function ErrorPages() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-10">
                    <div className="px-6 pb-5">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">error </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./404.sh</span></h1>
                        </a>
                        
                    </div>
                    <div className="w-1/2 lg:w-2/3 mx-auto  self-center lg:px-10 px-6 pb-5 pt-10">
                        <Image src={"/assets/error.webp"} width={400} height={400} alt="Error" className="rounded-lg "/>
                    </div>
                </div>

            </div>
        </div>
    )    
};
