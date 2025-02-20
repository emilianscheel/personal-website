import { Clock, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PricingCards() {
    return (
        <section className="container mx-auto max-w-full md:max-w-[1100px] py-12">
            <h2 className="text-3xl font-bold text-center mb-8">flexibel, einfach, transparent</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-6 w-6" />
                            Stündliche Abrechnung
                        </CardTitle>
                        <CardDescription>Flexibel und transparent</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">Ab 15 € pro Stunde</p>
                        <ul className="mt-4 space-y-2">
                            <li>Mindestens eine Stunde</li>
                            <li>Jede weitere angefangene halbe Stunde wird aufgerundet</li>
                            <li>Ideal für kleinere Projekte und Anpassungen</li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Beispiele:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Regelmäßige WordPress-Wartung</li>
                                <li>Nachbearbeitung kleinerer und mittelgroßer Änderungen</li>
                                <li>Durchführung von Updates</li>
                                <li>Wiederkehrende, aber unregelmäßige Design- und Layoutarbeiten</li>
                                <li>Kurzfristige Anpassungen und Fehlerbehebungen</li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="mailto:hello@emiliansch.dev" className="w-full" >
                            <Button className="w-full">Unverbindliches Gespräch vereinbaren</Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Projektbasierte Abrechnung
                        </CardTitle>
                        <CardDescription>Planungssicherheit für Ihr Projekt</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">Festpreis nach Vereinbarung</p>
                        <ul className="mt-4 space-y-2">
                            <li>Projekt als Ganzes abrechnen</li>
                            <li>Ohne Risiko über einen vereinbarten Zeitraum</li>
                            <li>Ideal für umfangreiche Projekte</li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Beispiele:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Mittelgroße bis große Webprojekte</li>
                                <li>Entwurf eines Logos</li>
                                <li>Entwicklung eines neuen Corporate Designs</li>
                                <li>Erstellung eines kompletten Webauftritts</li>
                                <li>Aufsetzen eines Online-Shops</li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="mailto:hello@emiliansch.dev" className="w-full" >
                            <Button className="w-full">Unverbindliches Gespräch vereinbaren</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

