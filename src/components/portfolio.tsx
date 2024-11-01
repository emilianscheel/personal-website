"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { FileText, Laptop, Mail, Palette, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function PortfolioComponent() {
    const [isLegalOpen, setIsLegalOpen] = useState(false)

    const services = [
        {
            title: "WordPress Websites",
            description: "Building and managing WordPress websites tailored to your needs",
            icon: <Laptop className="h-6 w-6" />
        },
        {
            title: "Custom Next.js Frontends",
            description: "Developing and maintaining custom-built Next.js front-end applications",
            icon: <FileText className="h-6 w-6" />
        },
        {
            title: "Logo & Corporate Design",
            description: "Creating distinctive logos and comprehensive corporate design solutions",
            icon: <Palette className="h-6 w-6" />
        },
        {
            title: "Consultation",
            description: "Providing advice on web development, design, and digital strategies",
            icon: <Phone className="h-6 w-6" />
        },
    ]

    const references = [
        { name: "La Place", logo: "/laplace.png?height=50&width=100", link: "https://la-place.site" },
        { name: "Songül Akdeniz", logo: "/songul.png?height=50&width=100", link: "https://songuelakdeniz.de" },
        { name: "Vera Scheel", logo: "/vera.png?height=50&width=100", link: "https://vera-schel.de" },
        { name: "Sukha Yoga Berlin", logo: "/sukha.png?height=50&width=100", link: "https://sukhayogaberlin.com" },
    ]

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
                    <img
                        src="/avatar.jpeg"
                        alt="Emilian Scheel Avatar"
                        className="w-24 h-24 rounded-full border-2 border-primary"
                    />

                    <img
                        src="/profile.jpeg"
                        alt="Emilian Scheel Profile"
                        className="w-24 h-24 rounded-full ml-[-3rem] border-2 border-primary"
                    />
                </div>

                <h1 className="text-4xl font-bold mb-2">Emilian Scheel</h1>
                <hr
                    className="w-16 h-0 bg-secondary mx-auto mb-4"
                />
                <p className="text-xl font-medium mb-8 text-primary">
                    Delivering high-quality software solutions for your business needs
                </p>
                <Button size="lg" variant="default" onClick={() => scrollToId('contact')}>
                    Contact Me
                </Button>
            </header>

            <main className="container mx-auto px-4 py-16 space-y-16">
                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center">My Services</h2>
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
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator />

                <section id="contact">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
                    <div className="text-center space-y-4">
                        <p className="text-muted-foreground">I`d love to hear about your project! Let`s discuss how I can help bring your ideas to life.</p>
                        <div className="flex flex-wrap justify-center gap-4 items-center">
                            <Button variant="outline" asChild>
                                <Link href="mailto:info@dockyar.de">
                                    <Mail className="mr-1 h-4 w-4" /> Email
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="tel:015225393956">
                                    <Phone className="mr-1 h-4 w-4" /> Call
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="https://www.linkedin.com/in/emilian-scheel" target="_blank" rel="noopener noreferrer">
                                    <LinkedInLogoIcon className="mr-1 h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="https://www.github.com/emilianscheel" target="_blank" rel="noopener noreferrer">
                                    <GitHubLogoIcon className="mr-1 h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Separator />

                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center"> Projects & Clients</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {references.map((ref, index) => (
                            <div key={index} className="w-1/2 sm:w-1/4 max-w-[150px] max-h-[100px] flex items-center justify-center">
                                <a href={ref.link} target="_blank">
                                    <img
                                        src={ref.logo}
                                        alt={`${ref.name} logo`}
                                        style={{ filter: "invert(.5) grayscale(1) saturate(.5)" }}
                                        className="max-w-[150px] max-h-[100px] object-contain filter grayscale"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div className="container mx-auto px-4 py-8 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Emilian Scheel. All rights reserved.</p>
                    <Button variant="link" onClick={() => setIsLegalOpen(true)}>
                        Legal Notice
                    </Button>
                </div>
            </footer>

            <Sheet open={isLegalOpen} onOpenChange={setIsLegalOpen}>
                <SheetContent className="w-full sm:max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Legal Notice</h2>
                    <div className="space-y-4">
                        <p>
                            Emilian Scheel<br />
                            Moosdorfstraße 10<br />
                            12435 Berlin<br />
                            Germany
                        </p>
                        <p>
                            Phone: 0152 25393956<br />
                            Email: info@dockyar.de
                        </p>
                        <h3 className="text-xl font-semibold">Disclaimer</h3>
                        <p className="text-muted-foreground">
                            The contents of this website have been created with the utmost care. However, I cannot guarantee the contents accuracy, completeness, or topicality. According to statutory provisions, I am responsible for my own content on these web pages. However, I am not obliged to monitor third party information provided or stored on this website. Once I become aware of a specific infringement of the law, I will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to me.
                        </p>
                        <h3 className="text-xl font-semibold">Copyright</h3>
                        <p className="text-muted-foreground">
                            The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution, or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.
                        </p>
                    </div>
                    <Button className="mt-8" onClick={() => setIsLegalOpen(false)}>
                        Close
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
    )
}