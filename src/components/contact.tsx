import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"



export const ContactComponent = () => {


    return (
        <section id="contact">
            <h2 className="text-3xl font-semibold mb-8 text-center">Melde dich gerne</h2>
            <div className="text-center space-y-4">
                <p className="text-muted-foreground max-w-lg mx-auto">Ich freue mich darauf, mehr über dein Projekt zu erfahren! Lass uns besprechen, wie ich dabei helfen kann, deine Ideen zum Leben zu erwecken.</p>
                <div className="flex flex-wrap justify-center gap-4 items-center">
                    <Button variant="outline" asChild>
                        <Link href="mailto:hello@emiliansch.dev">
                            <Mail className="mr-1 h-4 w-4" /> E-Mail
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="tel:015225393956">
                            <Phone className="mr-1 h-4 w-4" /> Anrufen
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
    )
}