"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FeaturesComparison } from "./feature-comparison";

interface Feature {
    title: string;
    description: string;
    priceMonthly: number;
    priceYearly: number;
    features: string[];
    mostPopular?: string;
}

interface FeatureComparison {
    title: string;
    features: {
        label: string;
        starter: boolean;
        growth: boolean;
        business: boolean;
    }[];
}

interface OtherPerk {
    title: string;
    perks: {
        label: string;
        starter: boolean;
        growth: boolean;
        business: boolean;
    }[];
}

interface PricingPlanDictionary {
    hero: {
        title: string;
        description: string;
        monthly: string;
        yearly: string;
        save: string;
    };
    plans: {
        starter: Feature;
        growth: Feature;
        business: Feature;
    };
    featureComparison: FeatureComparison;
    otherPerks: OtherPerk;
    cta: {
        title: string;
        description: string;
        button: string;
    };
}



export function PricingPlan({ dictionary }: { dictionary: PricingPlanDictionary }) {
    const [isAnnually, setIsAnnually] = useState(false);

    const PRICES = {
        starter: dictionary.plans.starter.priceMonthly,
        growth: dictionary.plans.growth.priceMonthly,
        business: dictionary.plans.business.priceMonthly,
    };

    const DISCOUNTS = {
        starter: 0.85,
        growth: 0.8,
        business: 0.75,
    };

    const toggleAnnually = () => {
        setIsAnnually(!isAnnually);
    };

    const getPrice = (monthlyPrice: number, discount: number) => {
        return isAnnually ? monthlyPrice * 12 * discount : monthlyPrice;
    };

    const getOriginalAnnualPrice = (monthlyPrice: number) => {
        return monthlyPrice * 12;
    };

    return (
        <div>
            <div className="min-h-screen mt-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center pt-20 pb-12 px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">{dictionary.hero.title}</h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{dictionary.hero.description}</p>
                    <div className="flex items-center justify-center gap-4">
                        <Label htmlFor="yearly" className="text-base">
                            {dictionary.hero.monthly}
                        </Label>
                        <Switch onCheckedChange={toggleAnnually} />
                        <Label htmlFor="yearly" className="text-base">
                            {dictionary.hero.yearly}
                        </Label>
                        <span className="ml-4 text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full border">
                            {dictionary.hero.save}
                        </span>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-8 max-w-7xl mx-auto">
                    {/* Starter Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 max-w-md mx-auto w-full"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">{dictionary.plans.starter.title}</h2>
                            <div className="text-4xl font-bold mb-2">
                                {isAnnually && (
                                    <p className="text-base text-gray-500 line-through mb-1">
                                        ${getOriginalAnnualPrice(PRICES.starter)}
                                    </p>
                                )}
                                ${getPrice(PRICES.starter, DISCOUNTS.starter)}
                                <span className="text-base font-medium ml-1">{isAnnually ? "/year" : "/month"}</span>
                            </div>
                            <p className="text-gray-600">{dictionary.plans.starter.description}</p>
                        </div>

                        <Link href="https://app.qentflow.com/auth/register">
                            <button className="w-full py-3 px-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-8">
                                {dictionary.cta.button}
                            </button>
                        </Link>

                        <ul className="space-y-4">
                            {dictionary.plans.starter.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-blue-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Growth Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 max-w-md mx-auto w-full lg:scale-105 relative"
                    >
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
                            {dictionary.plans.growth.mostPopular}
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">{dictionary.plans.growth.title}</h2>
                            <div className="text-4xl font-bold mb-2">
                                {isAnnually && (
                                    <p className="text-base text-gray-500 line-through mb-1">
                                        ${getOriginalAnnualPrice(PRICES.growth)}
                                    </p>
                                )}
                                ${getPrice(PRICES.growth, DISCOUNTS.growth)}
                                <span className="text-base font-medium ml-1">{isAnnually ? "/year" : "/month"}</span>
                            </div>
                            <p className="text-gray-600">{dictionary.plans.growth.description}</p>
                        </div>

                        <Link href="https://app.qentflow.com/auth/register">
                            <button className="w-full py-3 px-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors mb-8">
                                {dictionary.cta.button}
                            </button>
                        </Link>

                        <ul className="space-y-4">
                            {dictionary.plans.growth.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-blue-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Business Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 max-w-md mx-auto w-full"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">{dictionary.plans.business.title}</h2>
                            <div className="text-4xl font-bold mb-2">
                                {isAnnually && (
                                    <p className="text-base text-gray-500 line-through mb-1">
                                        ${getOriginalAnnualPrice(PRICES.business)}
                                    </p>
                                )}
                                ${getPrice(PRICES.business, DISCOUNTS.business)}
                                <span className="text-base font-medium ml-1">{isAnnually ? "/year" : "/month"}</span>
                            </div>
                            <p className="text-gray-600">{dictionary.plans.business.description}</p>
                        </div>

                        <Link href="https://app.qentflow.com/auth/register">
                            <button className="w-full py-3 px-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-8">
                                {dictionary.cta.button}
                            </button>
                        </Link>

                        <ul className="space-y-4">
                            {dictionary.plans.business.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-blue-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Feature Comparison Table - Desktop Only */}
                <div className="hidden lg:block">
                    <FeaturesComparison dictionary={dictionary} />
                </div>

                {/* CTA Section */}
                <div className="max-w-5xl mx-auto px-4 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-500 rounded-2xl p-8 md:p-16 text-center text-white"
                    >
                        <h2 className="text-3xl font-bold mb-4">{dictionary.cta.title}</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{dictionary.cta.description}</p>
                        <Link href="https://app.qentflow.com/auth/register">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                {dictionary.cta.button}
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
