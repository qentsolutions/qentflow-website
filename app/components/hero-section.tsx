"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { VideoContainer } from "./video-container";

interface Hero {
    latestFeature: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    benefit_1: string;
    benefit_2: string;
    videoSrc: string;
}

interface HeroSectionProps {
    dictionary: Hero;
}

export function HeroSection({ dictionary }: HeroSectionProps) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-56 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>

            <div className="container px-4 md:px-6 mx-auto pb-20">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            {dictionary.title.split(" ").slice(0, -2).join(" ")} <span className="text-blue-600">{dictionary.title.split(" ").slice(-2).join(" ")}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            {dictionary.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-4"
                        >
                            <Link href={dictionary.buttonLink}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12">
                                    {dictionary.buttonText}
                                </Button>
                            </Link>

                            <div className="grid grid-cols-2 gap-4 mt-2 sm:mt-0">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                                        <Check className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="text-sm text-gray-500">{dictionary.benefit_1}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                                        <Shield className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="text-sm text-gray-500">{dictionary.benefit_2}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                            <VideoContainer
                                src="/app/motion-video.mp4"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-600 blur-3xl opacity-30"></div>
                        <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-400 blur-3xl opacity-20"></div>
                    </motion.div>
                </div>
                {/* Wave SVG */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                        <path
                            fill="#3b82f6"
                            fillOpacity="1"
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div >
        </section >
    )
}

