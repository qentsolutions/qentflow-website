import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

interface PageProps {
    params: {
        lang: string;
    };
    children: React.ReactNode;
}

export default async function RootLayout({ children, params }: PageProps) {
    if (!locales.includes(params.lang)) {
        notFound();
    }

    const dict = await getDictionary(params.lang as string);

    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <Navbar lang={params.lang} dictionary={dict.navigation} />
                <main>{children}</main>
                <Footer dictionary={dict.footer} />
            </body>
        </html>
    );
}
