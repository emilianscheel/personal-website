import Link from "next/link";

export const LegalContent = () => {
    return (
        <>
            <div className="space-y-4">
                <p>
                    Emilian Scheel
                    <br />
                    Moosdorfstraße 10
                    <br />
                    12435 Berlin
                    <br />
                    Deutschland
                </p>
                <p>
                    Telefon:{" "}
                    <Link href="tel:015225393956">0152 25 3939 56</Link>
                    <br />
                    E-Mail:{" "}
                    <Link href="mailto:hello@emiliansch.dev">
                        hello@emiliansch.dev
                    </Link>
                </p>
                <h3 className="text-xl font-semibold">Haftungsausschluss</h3>
                <p className="text-muted-foreground">
                    Die Inhalte dieser Website wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte kann ich jedoch keine Gewähr
                    übernehmen. Als Diensteanbieter bin ich gemäß den
                    gesetzlichen Bestimmungen für eigene Inhalte auf diesen
                    Seiten verantwortlich. Ich bin jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu
                    überwachen. Sobald mir eine konkrete Rechtsverletzung
                    bekannt wird, werde ich die betreffenden Inhalte umgehend
                    entfernen. Eine diesbezügliche Haftung ist erst ab dem
                    Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                    möglich.
                </p>
                <h3 className="text-xl font-semibold">Urheberrecht</h3>
                <p className="text-muted-foreground">
                    Die auf dieser Website veröffentlichten Inhalte und Werke
                    unterliegen dem deutschen Urheberrecht. Jegliche
                    Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
                    Verwertung außerhalb der Grenzen des Urheberrechts bedarf
                    der vorherigen schriftlichen Zustimmung des jeweiligen
                    Autors oder Erstellers.
                </p>
            </div>
        </>
    );
};
