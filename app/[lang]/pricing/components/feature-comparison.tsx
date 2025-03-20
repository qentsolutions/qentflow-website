"use client"
import { Check, X } from "lucide-react"
import Link from "next/link"

interface FeaturesComparisonProps {
    dictionary: {
        featureComparison: {
            title: string
            features: { label: string, starter: boolean, growth: boolean, business: boolean }[]
        }
        otherPerks: {
            title: string
            perks: { label: string, starter: boolean, growth: boolean, business: boolean }[]
        }
        plans: {
            starter: {
                title: string
                description: string
            }
            growth: {
                title: string
                description: string
            }
            business: {
                title: string
                description: string
            }
        }
        cta: {
            button: string
        }
    }
}

export function FeaturesComparison({ dictionary }: FeaturesComparisonProps) {
    return (
        <div className="lg:flex flex-col justify-center px-10 pb-12 lg:mx-32 2xl:mx-64 hidden">
            <div className="mt-28 border-t border-solid border-gray-200 border-opacity-10">
                <div className="flex gap-5">
                    <div className="flex flex-col w-[24%]">
                        <div className="mt-24 text-lg font-semibold leading-6 text-gray-900">
                            {dictionary.featureComparison.title || "Catered for business"}
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[24%]">
                        <div className="flex flex-col mt-12 text-sm">
                            <div className="font-semibold text-base text-gray-900 leading-[171%]">
                                {dictionary.plans.starter.title}
                            </div>
                            <div className="mt-4 leading-6 text-gray-600">{dictionary.plans.starter.description}</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[53%]">
                        <div className="grow">
                            <div className="flex gap-5">
                                <div className="flex flex-col w-[45%]">
                                    <div className="flex flex-col grow justify-end pt-12 pb-1 text-sm border-t-2 border-blue-600">
                                        <div className="font-semibold text-base text-blue-600 leading-[171%]">
                                            {dictionary.plans.growth.title}
                                        </div>
                                        <div className="mt-4 leading-6 text-gray-600">{dictionary.plans.growth.description}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[43%]">
                                    <div className="flex flex-col mt-12 text-sm">
                                        <div className="font-semibold text-base text-gray-900 leading-[171%]">
                                            {dictionary.plans.business.title}
                                        </div>
                                        <div className="mt-4 leading-6 text-gray-600">{dictionary.plans.business.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="flex gap-5 mt-10 w-full">
                <div className="flex flex-col my-auto text-sm leading-4 text-gray-900 mx-14">
                    {dictionary.featureComparison.features.map((feature, index) => (
                        <div key={index} className={index > 0 ? "mt-9" : ""}>
                            {feature.label}
                        </div>
                    ))}
                </div>
                <div className="flex-auto px-px">
                    <div className="flex gap-5">
                        {/* Starter Features */}
                        <div className="flex flex-col w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.featureComparison.features.map((feature, index) => (
                                        <div key={index} className={`${index > 0 ? "mt-7" : ""}`}>
                                            {feature.starter ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Growth Features */}
                        <div className="flex flex-col ml-5 w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50 border-2 border-blue-600">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.featureComparison.features.map((feature, index) => (
                                        <div key={index} className={`${index > 0 ? "mt-7" : ""}`}>
                                            {feature.growth ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Business Features */}
                        <div className="flex flex-col ml-5 w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.featureComparison.features.map((feature, index) => (
                                        <div key={index} className={`${index > 0 ? "mt-7" : ""}`}>
                                            {feature.business ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Perks Section */}
            <div className="mt-16 text-lg font-semibold leading-4 text-gray-900">{dictionary.otherPerks.title}</div>
            <div className="flex gap-5 mt-11 w-full">
                <div className="flex flex-col my-auto text-sm leading-6 mx-14 text-gray-900">
                    {dictionary.otherPerks.perks.map((perk, index) => (
                        <div key={index} className={index > 0 ? "mt-9" : ""}>
                            {perk.label}
                        </div>
                    ))}
                </div>
                <div className="flex-auto px-px">
                    <div className="flex gap-5">
                        {/* Starter Other Perks */}
                        <div className="flex flex-col w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.otherPerks.perks.map((perk, index) => (
                                        <div key={index} className={index > 0 ? "mt-7" : ""}>
                                            {perk.starter ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Growth Other Perks */}
                        <div className="flex flex-col ml-5 w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50 border-2 border-blue-600">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.otherPerks.perks.map((perk, index) => (
                                        <div key={index} className={index > 0 ? "mt-7" : ""}>
                                            {perk.growth ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Business Other Perks */}
                        <div className="flex flex-col ml-5 w-[33%]">
                            <div className="flex justify-center items-center px-16 py-4 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex flex-col items-center w-[90px]">
                                    {dictionary.otherPerks.perks.map((perk, index) => (
                                        <div key={index} className={index > 0 ? "mt-7" : ""}>
                                            {perk.business ? <Check className="w-5 text-blue-600" /> : <X className="w-5 text-gray-400" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-5 mt-11 w-full">
                <div className="flex flex-col my-auto text-sm leading-6 mx-14 text-gray-900">
                    <div className="text-gray-100 pointer-events-none select-none">------------------------</div>
                </div>
                <div className="flex-auto px-px">
                    <div className="flex gap-5">
                        <div className="flex flex-col w-[33%]">
                            <Link href="https://app.qentflow.com/auth/register">
                                <button className="flex justify-center items-center w-full py-2 rounded-full shadow-sm bg-gray-50 border border-gray-200 cursor-pointer hover:text-blue-600">
                                    <span className="text-sm">{dictionary.cta.button}</span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%]">
                            <Link href="https://app.qentflow.com/auth/register">
                                <button className="flex justify-center items-center w-full py-2 rounded-full shadow-sm bg-blue-600 border-2 border-blue-600 cursor-pointer hover:bg-blue-700">
                                    <span className="text-white font-semibold">{dictionary.cta.button}</span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%]">
                            <Link href="https://app.qentflow.com/auth/register">
                                <button className="flex justify-center items-center w-full py-2 rounded-full shadow-sm bg-gray-50 border border-gray-200 cursor-pointer hover:text-blue-600">
                                    <span className="text-sm">{dictionary.cta.button}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
