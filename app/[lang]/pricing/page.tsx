/* eslint-disable */
import { getDictionary } from "@/lib/dictionaries";
import { PricingPlan } from "./components/pricing-plan";

export default async function Pricing({
    params,
}: {
    params: any; // Accepte temporairement tout
}) {
    const lang = (params as { lang: string }).lang; // Forçage du type
    const dict = await getDictionary(lang);

    return <PricingPlan dictionary={dict.pricing} />;
}
