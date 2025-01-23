import Image from "next/image";
import React from "react";
import FooterMobile from "./FooterMobile";

const Footer = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="hidden lg:block">
                <div className="hidden lg:block w-full h-[50vh] bg-[#171717] z-50 flex-col-centered text-white font-lexend">
                <div className="w-[90vw] flex-row-start mt-16 font-lexend">
                    <figure className="w-8 h-8 relative overflow-hidden">
                        <Image
                            src={"/footer/whitebull.svg"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                    » Mecha Mayhem 2024
                </div>
                <div className="w-[90vw] h-2/3 border-b-2 border-white border-opacity-40 flex flex-row items-end justify-start">
                    <div className="flex-col-left font-extralight text-xl gap-6 mr-12 mb-10 xl:w-[15vw] w-[20vw]">
                        <span className="font-semibold">Contact Us</span>
                        <span className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Gmail Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </figure>
                            mecha@westernmech.ca
                        </span>
                        <span className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Phone Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </figure>
                            403-991-3277
                        </span>
                    </div>
                    <div>
                        <div className="flex-col-left font-extralight text-xl gap-6 mb-10 xl:w-[15vw] w-[20vw]">
                            <span className="font-semibold">Follow Us</span>
                            <figure className="flex-row-centered">
                                <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                    <Image
                                        src={"/footer/Instagram Icon.svg"}
                                        alt="A picture of our facility's stations"
                                        style={{ objectFit: "cover" }}
                                        fill
                                    />
                                </figure>
                                <a className="hover:cusor-pointer" href="http://instagram.com/western_mechatronics" target="_blank" rel="noopener noreferrer">@western_mechatronics</a>
                            </figure>
                            <figure className="flex-row-centered">
                                <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                    <Image
                                        src={"/footer/Youtube Icon.svg"}
                                        alt="A picture of our facility's stations"
                                        style={{ objectFit: "cover" }}
                                        fill
                                    />
                                </figure>
                                <a className="hover:cusor-pointer" href="https://www.youtube.com/channel/UCzIGIOC30ne4qzChe6lRZ0g" target="_blank" rel="noopener noreferrer">@western_mechatronics</a>
                            </figure>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-col-left font-extralight text-xl gap-6 ml-12 mb-10 xl:w-[15vw] w-[20vw]">
                        <span className="font-semibold">Report an Issue</span>
                        <span className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Git Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <a className="hover:cursor-pointer" href="https://github.com/liuisaac/Mecha-Mayhem-Frontend-2025/issues" target="_blank" rel="noopener noreferrer">
                                liuisaac/Mecha_Mayhem_App/issues
                            </a>
                        </span>
                        <span className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Star Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <a className="hover:cusor-pointer" href="https://github.com/liuisaac/Mecha-Mayhem-Frontend-2025" target="_blank" rel="noopener noreferrer">
                                Star the repo :{")"}
                            </a>
                        </span>
                    </div>
                </div>
                <div className="w-[90vw] h-1/3 flex flex-row text-xl pt-[8vh] font-light">
                    <span className="w-[50vw]">
                        @2021 - 2024 Western Mechatronics
                    </span>
                    <div className="w-[40vw] flex flex-row items-start justify-end">
                        <span>mechamayhem.ca</span>
                    </div>
                </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <FooterMobile />
            </div>
        </div>
    );
};

export default Footer;
