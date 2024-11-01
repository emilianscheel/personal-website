import type { Metadata } from "next";
import "./font.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio | Emilian Scheel",
    description: "Delivering high-quality software solutions for your business needs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
