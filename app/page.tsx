import { redirect } from "next/navigation"

// Liste des langues supportées
export const locales = ["en", "fr", "es", "it", "de"]
export const defaultLocale = "en"

export default function Home() {
  // Rediriger vers la langue par défaut
  redirect(`/${defaultLocale}`)
}

