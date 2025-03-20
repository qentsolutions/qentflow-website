"use client"

import { Card, CardContent } from "@/components/ui/card"
import StepShowcase from "./step-showcase"
import { motion } from "framer-motion"
import NumberTicker from "./number-ticker"

export function FeaturesSection({ dictionary }: { dictionary: Record<string, string> }) {
    const stats = Array.isArray(dictionary.stats)
        ? dictionary.stats.map((stat: { value: number; unit: string; label: string }) => ({
            value: stat.value,
            unit: stat.unit,
            label: stat.label,
        }))
        : []

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{dictionary["title"]}</h2>
                    <div className="inline-block">
                        <span className="text-blue-600 px-6 py-3 rounded-full bg-white text-xl md:text-3xl font-bold">
                            {dictionary["description"]}
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-24"
                >
                    <StepShowcase dictionary={dictionary} />
                </motion.div>

                <div className="mx-auto max-w-5xl text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-14 text-2xl md:text-4xl font-bold text-white"
                    >
                        {dictionary["stepShowcaseTitle"]}. &nbsp;
                        {dictionary["description"]}
                    </motion.h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={item}>
                                <Card className="bg-gray-50 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <CardContent className="flex flex-col items-center justify-center px-6 py-2">
                                        <div className="text-4xl font-bold text-blue-600 md:text-5xl flex items-baseline">
                                            <NumberTicker value={stat.value} />
                                            {stat.unit && <span className="text-lg text-blue-400 ml-1">{stat.unit}</span>}
                                        </div>
                                        <p className="mt-2 text-center text-sm font-medium text-gray-600">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
