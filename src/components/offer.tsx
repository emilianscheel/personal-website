import { ArrowRight, FileText, Laptop, Palette, Phone } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"



const services = [
    {
        title: "WordPress-Websites & Shopify-Shops",
        description: "Erstellung und Verwaltung von WordPress-Websites und Shopify-Shops, maßgeschneidert auf Ihre Bedürfnisse – inklusive Website-Sicherheit, Updates, Wartung und Nachbearbeitung",
        icon: <Laptop className="h-6 w-6" />,
        exampleLinks: [
            { text: "Songül Akdeniz", url: "https://songuelakdeniz.de" },
            { text: "SOFTCOREFOOD", url: "https://softcorefood.de/" },
        ],
    },
    {
        title: "Individuelle Next.js-Frontends",
        description: "Entwicklung und Pflege maßgeschneiderter Next.js-Frontend-Anwendungen sowie Full-Stack-Apps inklusive Backend und Datenbank",
        icon: <FileText className="h-6 w-6" />,
        exampleLinks: [
            { text: "La Place", url: "https://la-place.site" },
        ],
    },
    {
        title: "Logo- & Corporate Design",
        description: "Gestaltung markanter Logos und umfassender Corporate-Design-Lösungen – inklusive Visitenkarten, Briefpapier, Webauftritt und Farbschema, uvm.",
        icon: <Palette className="h-6 w-6" />,
        exampleLinks: [
            { text: "Fraktales Lernen", url: "https://fraktales-lernen.org" },
            { text: "Sukha Yoga Berlin", url: "https://sukhayogaberlin.com" },
        ],
    },
    {
        title: "Beratung",
        description: "Beratung zu Webentwicklung, Design, digitalen Strategien, Prozessoptimierung und -vereinfachung, sowie zur Digitalisierung von Geschäftsprozessen",
        icon: <Phone className="h-6 w-6" />,
        exampleLinks: [
            { text: "Songül Akdeniz", url: "https://songuelakdeniz.de" },
        ],
    },
]

export const OfferComponent = () => {

    return (
        <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">Angebote</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-full md:max-w-[800px] mx-auto">
                {services.map((service, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-medium text-xl">
                                {service.icon}
                                {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <div className="flex flex-wrap gap-4">
                                {service.exampleLinks.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.url}
                                        className="group text-sm text-primary relative inline-flex items-center"
                                        target="_blank"
                                    >
                                        <span className="relative">
                                            {link.text}
                                            <span className="absolute left-0 -bottom-1 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                        <ArrowRight className="w-4 h-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}