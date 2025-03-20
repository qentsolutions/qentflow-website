import { getDictionary } from "@/lib/dictionaries";
import { PricingPlan } from "./components/pricing-plan";

export default async function Pricing({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang)
   
    return (
        <PricingPlan dictionary={dict.pricing} />
    )

};

