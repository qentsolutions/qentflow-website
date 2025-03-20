"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection({ dictionary }: { dictionary: Record<string, string> }) {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative isolate overflow-hidden bg-gradient-to-b from-blue-600 to-blue-500 px-6 py-12 shadow-md rounded-3xl sm:px-24"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20" />
                    <div className="absolute -top-10 -right-10 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-3xl" />

                    <div className="mx-auto max-w-7xl relative">
                        <div className="lg:flex lg:items-center lg:gap-x-10 lg:justify-between">
                            <motion.div
                                className="max-w-xl text-center lg:text-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {dictionary.title}
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    {dictionary.subtitle}
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={dictionary.primaryButtonLink}
                                        className="rounded-full border bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white inline-flex items-center justify-center"
                                    >
                                        {dictionary.primaryButton}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="mt-16 sm:mt-24 lg:mt-0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="relative w-[450px] max-w-full">
                                    <Image
                                        className="w-full rounded-xl shadow-2xl ring-1 ring-white/10"
                                        src={dictionary.imageSrc}
                                        alt={dictionary.imageAlt}
                                        width={1824}
                                        height={1080}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
