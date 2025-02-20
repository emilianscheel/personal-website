"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react"
import { ContactComponent } from "./contact"
import { CustomersComponent } from "./customers"
import { LegalContent } from "./legal"
import { OfferComponent } from "./offer"
import PricingCards from "./pricing"

export function PortfolioComponent() {
    const [isLegalOpen, setIsLegalOpen] = useState(false)

    const scrollToId = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="container mx-auto px-4 py-16 text-center">

                <div className="flex justify-center items-center gap-0 mb-8 mx-auto">
                    <Image
                        src="/avatar.jpeg"
                        alt="Emilian Scheel Avatar"
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full border-2 border-primary"
                    />

                    <Image
                        src="/profile.jpeg"
                        alt="Emilian Scheel Profile"
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full ml-[-3rem] border-2 border-primary"
                    />
                </div>

                <h1 className="text-4xl font-bold mb-2">Emilian Scheel</h1>
                <hr
                    className="w-16 h-0 bg-secondary mx-auto mb-4"
                />
                <p className="text-xl font-medium mb-8 text-primary max-w-2xl mx-auto">
                    Schlichte Softwarelösungen sowie Design- und Layoutarbeiten von A bis Z – <br />für Selbstständige, kleine Unternehmen und Organisationen
                </p>
                <Button size="lg" variant="default" onClick={() => scrollToId('contact')}>
                    Kontakt aufnehmen
                </Button>
            </header>

            <main className="container mx-auto px-4 py-16 space-y-16">


                <OfferComponent />

                <Separator />

                <CustomersComponent />

                <Separator />

                <PricingCards />

                <Separator />

                <ContactComponent />

                <div className="h-64"></div>

            </main>

            <footer className="border-t">
                <div className="container mx-auto px-4 py-8 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Emilian Scheel. Alle Rechte vorbehalten.</p>
                    <Button variant="link" onClick={() => setIsLegalOpen(true)}>
                        Impressum
                    </Button>
                </div>
            </footer>

            <Sheet open={isLegalOpen} onOpenChange={setIsLegalOpen}>
                <SheetContent className="w-full sm:max-w-2xl">

                    <LegalContent />

                    <Button className="mt-8" onClick={() => setIsLegalOpen(false)}>
                        Schließen
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
    )
}