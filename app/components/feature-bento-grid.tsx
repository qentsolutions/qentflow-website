"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
    title: string;
    description: string;
    image: string;
}

interface FeatureBentoGridDictionary {
    title: string;
    subtitle: string;
    features: Feature[];
}

export function FeatureBentoGrid({ dictionary }: { dictionary: FeatureBentoGridDictionary }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const features = dictionary.features;

    return (
        <div className="pb-24">
            <div className="mx-auto max-w-2xl px-6 pt-20 lg:max-w-7xl lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-xl font-semibold text-blue-600">
                        {dictionary.title}
                    </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
                        {dictionary.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2"
                >
                    <motion.div variants={item} className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-6 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-blue-600 max-lg:text-center">
                                    {features[0].title}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {features[0].description}
                                </p>
                            </div>
                            <div className="container relative min-h-[300px] w-full grow max-lg:mx-auto max-lg:max-w-sm p-4 flex items-center justify-center">
                                <Image src={features[0].image} alt="board image" width={300} height={200} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </motion.div>

                    <motion.div variants={item} className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-6">
                                <p className="mt-2 text-lg font-medium tracking-tight text-blue-600 max-lg:text-center">
                                    {features[1].title}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {features[1].description}
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-6 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <Image
                                    className="w-full max-lg:max-w-xs rounded-lg border absolute -bottom-16 left-14"
                                    src={features[1].image}
                                    alt="Calendar"
                                    width={200}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </motion.div>

                    <motion.div variants={item} className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-6">
                                <p className="mt-2 text-lg font-medium tracking-tight text-blue-600 max-lg:text-center">
                                    {features[2].title}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {features[2].description}
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2 justify-center">
                                <img
                                    className="w-full max-lg:max-w-xs rounded-lg border absolute -bottom-6 left-14"
                                    src={features[2].image}
                                    alt="Automations"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </motion.div>

                    <motion.div variants={item} className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-6 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-blue-600 max-lg:text-center">
                                    {features[3].title}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {features[3].description}
                                </p>
                            </div>
                            <div className="px-8 pb-8 pt-6 flex items-center">
                                <div className="rounded-xl shadow-sm">
                                    <Image src={features[3].image} alt="documents feature image" width={300} height={200} />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
