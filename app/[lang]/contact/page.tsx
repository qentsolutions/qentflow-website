/* eslint-disable */
import { getDictionary } from "@/lib/dictionaries";
import { ContactPage } from "./components/contact-page";

export default async function Contact({
    params,
}: {
    params: any; // Accepte temporairement tout
}) {
    const lang = (params as { lang: string }).lang; // Forçage du type

    const dict = await getDictionary(lang);

    return <ContactPage dictionary={dict.contact} />;
}
