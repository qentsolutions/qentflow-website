"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Globe, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { locales, languageNames } from "@/lib/i18n-config"
import Image from "next/image"
import { Logo } from "./logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export function Navbar({
    lang,
    dictionary,
}: {
    lang: string
    dictionary: Record<string, string>
}) {
    const pathname = usePathname()

    // Fonction pour changer de langue tout en préservant la route actuelle
    const switchLanguage = (newLang: string) => {
        // Obtenir le chemin sans le préfixe de langue
        const segments = pathname.split("/")
        segments[1] = newLang // Remplacer le segment de langue
        return segments.join("/")
    }

    const resources = [
        {
            name: dictionary.blog,
            description: "Get a better understanding of your traffic",
            href: "/blog",
            icon: BookOpen,
            color: "bg-orange-100/50",
            hoverColor: "hover:bg-orange-100/50",
            iconColor: "text-orange-600",
        },
        {
            name: dictionary.newfeatures,
            description: "Stay up to date with our latest updates",
            href: "/new-features",
            icon: Star,
            color: "bg-blue-100/50",
            hoverColor: "hover:bg-blue-100/50",
            iconColor: "text-blue-600",
        },
    ];

    // Obtenez les deux lettres en majuscules de la langue actuelle
    const langUpperCase = lang.toUpperCase()

    return (
        <header className="fixed z-50 w-full top-0 h-20 px-4 border-gray-100 border bg-white flex items-center shadow-sm">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/">
                        <Image src="/logo.png" width={30} height={30} alt="Qentflow Logo" className="md:hidden" />
                    </Link>

                </div>

                <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                    <Logo />

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Menu />
                            </SheetTrigger>
                            <SheetContent className="bg-white flex flex-col justify-between px-0">
                                {/* <SidebarRoutes /> */}
                                <Link href="https://app.qentflow.com/auth/register" className="mx-6">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="hidden md:flex items-center justify-between w-full">
                        <div className="flex items-center ml-4 text-sm">
                            <NavigationMenu className="ml-20 z-50">
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="text-black bg-transparent font-normal mr-2">
                                            {dictionary.resources}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="p-2 md:w-[400px]">
                                                <li className="flex flex-col">
                                                    {resources.map((item) => (
                                                        <div
                                                            key={item.name}
                                                            className={`group relative flex gap-x-6 rounded-lg p-4 ${item.hoverColor}`}
                                                        >
                                                            <div
                                                                className={`mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white ${item.color}`}
                                                            >
                                                                <item.icon
                                                                    className={`h-6 w-6 ${item.iconColor}`}
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                            <div>
                                                                <a
                                                                    href={item.href}
                                                                    className="font-semibold text-gray-900"
                                                                >
                                                                    {item.name}
                                                                    <span className="absolute inset-0" />
                                                                </a>
                                                                <p className="text-gray-600">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <Link href={`/${lang}/pricing`} className="ml-2">{dictionary.pricing}</Link>
                            <Link href={`/${lang}/contact`} className="ml-7">{dictionary.contact}</Link>
                        </div>

                        <div className="flex items-center justify-center">
                            <span className="mr-1 font-medium">{langUpperCase}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Globe className="h-5 w-5" />
                                        <span className="sr-only">Switch language</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {locales.map((locale) => (
                                        <DropdownMenuItem key={locale} asChild>
                                            <Link href={switchLanguage(locale)} className={locale === lang ? "font-bold" : ""}>
                                                {languageNames[locale]}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="ml-2 space-x-2">
                                <a href="https://www.app.qentflow.com/auth/login">
                                    <Button variant={"ghost"} className="cursor-pointer">
                                        {dictionary.connexion}
                                    </Button>
                                </a>
                                <a href="https://www.app.qentflow.com/auth/register">
                                    <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                                        {dictionary.signup}
                                    </Button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
