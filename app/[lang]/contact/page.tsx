import { getDictionary } from "@/lib/dictionaries";
import { ContactPage } from "./components/contact-page";

export default async function Pricing({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang)

    return (
        <ContactPage dictionary={dict.contact} />
    )

};

