import type { Metadata } from "next";
import "./font.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Emilian Scheel",
    description:
        "Softwarelösungen sowie Design- und Layoutarbeiten von A bis Z – für Selbstständige, kleine Unternehmen und Organisationen",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body>{children}</body>
        </html>
    );
}
