import React from "react";
import Navbar from "@/components/navBar";
import ProfileSection from "@/components/profileSection";

export default function Profile() {
    return(
        <main className="">
            <div className="pt-16">
                <Navbar />
            </div>
            <div className="pt-10 pb-10">
                <ProfileSection />
            </div>
        </main>
    )
}