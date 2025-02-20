
const references = [
    { name: "La Place", logo: "/laplace.png?height=50&width=100", link: "https://la-place.site" },
    { name: "Songül Akdeniz", logo: "/songul.png?height=50&width=100", link: "https://songuelakdeniz.de" },
    { name: "Vera Scheel", logo: "/vera.png?height=50&width=100", link: "https://vera-schel.de" },
    { name: "Sukha Yoga Berlin", logo: "/sukha.png?height=50&width=100", link: "https://sukhayogaberlin.com" },
    { name: "Fraktales Lernen", logo: "/fraktaleslernen.png?height=50&width=100", link: "https://fraktales-lernen.org" },
    { name: "Honig retten!", logo: "/honigtreu.png?height=50&width=100", link: "https://honigtreu.de" },
    { name: "Immanuel-Kant-Gymnasium", logo: "/kantgymnasium.png?height=50&width=100", link: "https://kant-gymnasium.de" },
    { name: "Kantmade", logo: "/kantmade.png?height=50&width=100", link: "https://merch.ikg.li/" },
    { name: "SOFTCOREFOOD", logo: "/softcorefood.png?height=50&width=100", link: "https://softcorefood.de/" },
]

export const CustomersComponent = () => {

    return (
        <section className="container mx-auto max-w-full md:max-w-[1000px] py-12">
            <h2 className="text-3xl font-semibold mb-8 text-center"> Projekte & Kunden</h2>
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
    )
}