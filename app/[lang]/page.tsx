import { getDictionary } from "@/lib/dictionaries"
import { HeroSection } from "../components/hero-section"
import { CTASection } from "../components/cta-section"
import { FeaturesSection } from "../components/features/features-section"
import FAQ from "../components/faq"
import Testimonials from "../components/testimonials"
import { FeatureBentoGrid } from "../components/feature-bento-grid"


export default async function Home({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang)

    return (
        <>
            <HeroSection dictionary={dict.hero} />
            <FeaturesSection dictionary={dict.features} />
            <FeatureBentoGrid dictionary={dict.featureBentoGrid} />
            <Testimonials dictionary={dict.testimonials} />
            <FAQ dictionary={dict.faq} />
            <CTASection dictionary={dict.cta} />
        </>
    )
}

