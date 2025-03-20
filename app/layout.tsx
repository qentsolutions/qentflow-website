import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Qentflow",
    description: "An all-in-one platform designed to streamline project management, combining task boards, real-time collaboration, document sharing, and visual timelines. Simplify workflow management, enhance team productivity, and drive project success with powerful tools for every step of the process.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
