import type {Metadata} from "next";
import {Geist, Geist_Mono, Karla} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const karla = Karla({
    variable: "--font-karla",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Marlo's Plaza",
    description: "Flourish in motion, live in comfort",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${karla.className} antialiased bg-stone-300`}
        >
        {children}
        </body>
        </html>
    );
}
