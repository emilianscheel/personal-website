import type { Metadata } from "next";
import "./font.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio | Emilian Scheel",
    description: "Emilian Scheel's portfolio of software services",
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
