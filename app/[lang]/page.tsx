/* eslint-disable */
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { HeroSection } from "../components/hero-section";
import { CTASection } from "../components/cta-section";
import { FeaturesSection } from "../components/features/features-section";
import FAQ from "../components/faq";
import Testimonials from "../components/testimonials";
import { FeatureBentoGrid } from "../components/feature-bento-grid";

export async function generateMetadata(): Promise<Metadata> {
    return {};
}

interface PageProps {
    params: any; // Accepte temporairement tout
}

export default async function Home({ params }: PageProps) {
    const lang = (params as { lang: string }).lang; // Forçage du type
    const dict = await getDictionary(lang);

    return (
        <>
            <HeroSection dictionary={dict.hero} />
            <FeaturesSection dictionary={dict.features} />
            <FeatureBentoGrid dictionary={dict.featureBentoGrid} />
            <Testimonials dictionary={dict.testimonials} />
            <FAQ dictionary={dict.faq} />
            <CTASection dictionary={dict.cta} />
        </>
    );
}
