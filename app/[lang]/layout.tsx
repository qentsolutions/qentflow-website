import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { locales } from "@/lib/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import { notFound } from "next/navigation"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    // Vérifier si la langue est supportée
    if (!locales.includes(params.lang)) {
        notFound()
    }

    // Obtenir le dictionnaire pour la navigation dans le composant serveur
    const dict = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                {/* Passer le dictionnaire de navigation à la Navbar */}
                <Navbar lang={params.lang} dictionary={dict.navigation} />
                <main>{children}</main>
                <Footer dictionary={dict.footer} />
            </body>
        </html>
    )
}

