import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "../fonts/NEXT ART_Light.otf", // Путь к файлу Thin
            weight: "100", // Вес шрифта Thin
            style: "normal", // Стиль
        },
        {
            path: "../fonts/NEXT ART_Regular.otf", // Путь к файлу Bold
            weight: "400", // Вес шрифта Bold
            style: "normal", // Стиль
        },
        {
            path: "../fonts/NEXT ART_Bold.otf", // Путь к файлу Bold
            weight: "700", // Вес шрифта Bold
            style: "normal", // Стиль
        },
    ],
    display: "swap", // Опционально: улучшает рендеринг
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Борис Рыжий",
    description: "Фанатский сайт про русского поэта Бориса Рыжего",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${myFont.className} bg-black antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
