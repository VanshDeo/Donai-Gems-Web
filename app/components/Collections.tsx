import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Image from "next/image";

import gem11 from "../assets/gem11.jpg";
import gem12 from "../assets/gem12.jpg";
import gem13 from "../assets/gem13.jpg";
import gem14 from "../assets/gem14.jpg";
import gem15 from "../assets/gem15.jpg";

const playFair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Gems = [
    { src: gem11, alt: "Gem 1" },
    { src: gem12, alt: "Gem 2" },
    { src: gem13, alt: "Gem 3" },
    { src: gem14, alt: "Gem 4" },
    { src: gem15, alt: "Gem 5" },
];

const Collections = () => {
    return (
        <div className="max-w-5xl mx-auto w-full py-10 px-4">
            {/* Title */}
            <h1
                className={`text-4xl md:text-5xl text-center mb-5 ${playFair.className} mb-2 mt-15`}
                style={{
                    background: "linear-gradient(to right, #FFDCBB, #54330C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Our Inventory
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 max-w-5xl mx-auto">
                {Gems.map((gem, index) => (
                    <div
                        key={index}
                        className="rounded-sm border border-[#C49A6C66] cursor-pointer"
                    >
                        <Image
                            src={gem.src}
                            alt={gem.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Last Card */}
                <div className="flex flex-col items-center justify-center border border-[#C49A6C66] rounded-sm text-center py-10 px-5 bg-[#FFFFFF66]">
                    <h2
                        className={`${playFair.className} text-5xl text-[#54330C] mb-2`}
                        style={{
                            background:
                                "linear-gradient(to right, #FFDCBB, #54330C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        10+
                    </h2>
                    <p
                        className={`${openSans.className} text-[#2E2B28CC] text-md font-light mb-2`}
                    >
                        Explore Full Inventory
                    </p>
                    <a
                        href="#"
                        className="text-sm text-[#2E2B28CC] underline font-light"
                    >
                        View All
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Collections;
