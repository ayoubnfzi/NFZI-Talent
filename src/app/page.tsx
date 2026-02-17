import ContactForm from "@/components/ContactForm";

const NAV_ITEMS = [
  { href: "#presentation", label: "Présentation" },
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Processus" },
  { href: "#credibilite", label: "Crédibilité" },
  { href: "#devis", label: "Devis" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    title: "Identification de profils pénuriques ou stratégiques",
    problem: "Vous manquez de visibilité sur les bons viviers.",
    benefits: "Ciblage précis, gain de temps, meilleure adéquation au poste.",
    description:
      "Cartographie du marché et définition d’une short-list réaliste et performante.",
  },
  {
    title: "Sourcing confidentiel et discret",
    problem: "Votre recrutement doit rester sensible ou non public.",
    benefits: "Approche maîtrisée, confidentialité, image employeur protégée.",
    description:
      "Approche directe adaptée à vos enjeux et à la maturité du marché.",
  },
  {
    title: "Prise de contact personnalisée",
    problem: "Les candidats sollicités sont sur-sollicités.",
    benefits: "Meilleur taux de réponse, échanges qualitatifs, engagement.",
    description:
      "Pitch ajusté au profil et au contexte pour initier une conversation utile.",
  },
  {
    title: "Qualification approfondie des motivations",
    problem: "Les signaux d’alerte apparaissent trop tard.",
    benefits: "Moins de refus, décision plus sûre, recrutement durable.",
    description:
      "Évaluation des motivations, contraintes, attentes et critères de décision.",
  },
  {
    title: "Suivi du processus et closing candidat",
    problem: "Le process se dégrade entre les étapes.",
    benefits: "Fluidité, coordination, sécurisation de l’acceptation.",
    description:
      "Suivi rapproché, feedbacks et accompagnement jusqu’à la signature.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-zinc-950"
          >
            NFZI Talent
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1 transition hover:text-blue-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-blue-950 px-4 text-sm font-semibold text-white transition hover:bg-blue-900"
          >
            Demander un échange
          </a>
        </div>

        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-6 pb-4 lg:px-8">
            <nav className="flex gap-2 overflow-x-auto text-sm text-zinc-700 [-webkit-overflow-scrolling:touch]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-3 py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Consultant en recrutement freelance • partout en France
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Recrutements stratégiques, approche humaine, résultats durables.
              </h1>
              <div className="h-px w-16 bg-blue-950/20" aria-hidden="true" />
              <p className="max-w-xl text-lg leading-8 text-zinc-700">
                NFZI Talent accompagne vos décisions RH avec une approche directe
                premium, un sourcing confidentiel et une évaluation exigeante —
                pour une short-list qualifiée et un closing sécurisé.
              </p>
              <p className="text-sm text-zinc-600">
                 Pour les dirigeants, DRH et RRH qui recrutent partout en France.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-950 px-6 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  Parler de votre besoin
                </a>
                <a
                  href="#services"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:border-zinc-300 hover:text-zinc-950"
                >
                  Découvrir l’accompagnement
                </a>
              </div>
              <p className="text-sm text-zinc-600">
                Aucun email ni numéro de téléphone n’est affiché : les demandes
                passent uniquement par le formulaire.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <div className="space-y-5">
                <p className="text-sm font-semibold tracking-tight text-zinc-950">
                  Pour vos recrutements sur mesure
                </p>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-950/70" />
                    Profils pénuriques et postes stratégiques
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-950/70" />
                    Approche directe confidentielle
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-950/70" />
                    Évaluation et short-list qualifiée
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-950/70" />
                    Accompagnement jusqu’au closing
                  </li>
                </ul>

                <div className="border-t border-zinc-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                    Engagement
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
                    Une exécution de bout en bout, avec un suivi rapproché et des
                    synthèses claires pour décider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="presentation"
          className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center lg:px-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Présentation
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Une approche exigeante et accessible
              </h2>
              <p className="leading-7 text-zinc-700">
                NFZI Talent est un accompagnement de recrutement à destination
                des entreprises, pensé pour les décideurs RH et business
                (dirigeants, DRH, RRH).
              </p>
              <p className="leading-7 text-zinc-700">
                Objectif : générer des recrutements réussis sur des postes
                stratégiques et des profils pénuriques, avec une approche humaine
                et un haut niveau de confidentialité.
              </p>
              <p className="leading-7 text-zinc-700">
                Zone d’intervention : <strong>partout en France</strong>. La
                méthode repose sur l’écoute, la précision du ciblage, et une
                évaluation structurée pour sécuriser vos décisions.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <p className="text-sm font-semibold tracking-tight text-zinc-950">
                En bref
              </p>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-900">Cible</dt>
                  <dd className="mt-1 text-zinc-700">
                    Entreprises qui recrutent — décideurs RH & business
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Zone</dt>
                  <dd className="mt-1 text-zinc-700">Partout en France</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Engagement</dt>
                  <dd className="mt-1 text-zinc-700">
                    Sourcing confidentiel, suivi, et closing candidat
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-24 border-b border-zinc-200"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Services
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Services — une exécution de bout en bout
              </h2>
              <p className="leading-7 text-zinc-700">
                Chaque mission est cadrée pour produire une short-list qualifiée,
                réduire les risques et améliorer l’expérience candidat.
              </p>
            </div>

            <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="border-t border-zinc-200 pt-8"
                >
                  <div
                    className="mb-4 h-px w-12 bg-blue-950/15"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {service.description}
                  </p>
                  <div className="mt-5 space-y-3 text-sm">
                    <p className="text-zinc-700">
                      <span className="font-semibold text-zinc-900">
                        Problème adressé :
                      </span>{" "}
                      {service.problem}
                    </p>
                    <p className="text-zinc-700">
                      <span className="font-semibold text-zinc-900">
                        Bénéfices :
                      </span>{" "}
                      {service.benefits}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="processus"
          className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Processus
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Processus de recrutement
              </h2>
              <p className="leading-7 text-zinc-700">
                Une démarche structurée, pour rester rapide sans sacrifier la
                qualité.
              </p>
            </div>

            <ol className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {[
                {
                  title: "Analyse du besoin et du contexte",
                  text: "Clarification du poste, enjeux, critères, contraintes et calendrier.",
                },
                {
                  title: "Définition de la stratégie de sourcing",
                  text: "Choix des canaux, ciblage, éléments de message et plan d’attaque.",
                },
                {
                  title: "Approche directe et confidentielle",
                  text: "Approche discrète et personnalisée auprès des bons profils.",
                },
                {
                  title: "Évaluation et short-list qualifiée",
                  text: "Entretiens, validation des motivations et synthèses exploitables.",
                },
                {
                  title: "Accompagnement jusqu’au closing",
                  text: "Suivi des étapes, gestion des attentes et sécurisation de l’acceptation.",
                },
              ].map((step, idx) => (
                <li
                  key={step.title}
                  className="border-t border-zinc-200 pt-8"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <p className="text-xs font-semibold tracking-[0.22em] text-zinc-600">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <div className="h-px flex-1 bg-zinc-200" aria-hidden="true" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="credibilite"
          className="scroll-mt-24 border-b border-zinc-200"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Crédibilité
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Chiffres clés et crédibilité
              </h2>
              <p className="leading-7 text-zinc-700">
                NFZI Talent s’appuie sur l’expérience terrain et une exigence de
                qualité.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-white">
              <div className="grid divide-y divide-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                  {
                    value: "3 ans",
                    label: "d’expérience",
                  },
                  {
                    value: "+200",
                    label: "recrutements réalisés en 3 ans",
                  },
                  {
                    value: "JO Paris",
                    label:
                      "accompagnement de l’organisation sur le recrutement du personnel (avant et durant l’évènement)",
                  },
                ].map((stat) => (
                  <div key={stat.value} className="p-8">
                    <div
                      className="mb-5 h-1 w-10 rounded-full bg-blue-950/15"
                      aria-hidden="true"
                    />
                    <p className="text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-zinc-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="devis" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="rounded-2xl border border-zinc-200 bg-white p-10">
              <div className="max-w-2xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                  Devis
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Sur devis uniquement
                </h2>
                <p className="leading-7 text-zinc-700">
                  Chaque recrutement est différent. Le périmètre, le niveau de
                  confidentialité et la complexité du marché déterminent la
                  stratégie et le dispositif.
                </p>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-950 px-6 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Contact
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Contact
              </h2>
              <p className="leading-7 text-zinc-700">
                Décrivez votre besoin : je reviens vers vous rapidement pour
                qualifier le contexte et vous proposer une approche.
              </p>
              <p className="text-sm text-zinc-700">
                
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-tight text-zinc-950">
                NFZI Talent
              </p>
              <p className="text-sm text-zinc-600">
                Consultant en recrutement freelance — partout en France
              </p>
            </div>
            
            <p className="text-sm text-zinc-600">
                contact@nfzitalent.fr
              </p>
            </div>

            <div className="space-y-3 text-sm text-zinc-600">
              <p className="font-semibold text-zinc-950">Mentions légales</p>
              <p>
                Éditeur : NFZI Talent (site vitrine à destination des entreprises)
              </p>
              <p>Hébergement : Vercel (plateforme compatible Next.js)</p>
              <details className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <summary className="cursor-pointer text-sm font-semibold text-zinc-950">
                  Politique de confidentialité
                </summary>
                <div className="mt-3 space-y-3 text-sm text-zinc-700">
                  <p>
                    Les informations transmises via le formulaire (nom,
                    entreprise, email professionnel, téléphone) sont utilisées
                    uniquement pour traiter votre demande et vous recontacter.
                  </p>
                  <p>
                    Les données sont envoyées à un prestataire tiers de gestion
                    de formulaires (selon la configuration) et ne sont pas
                    stockées sur ce site.
                  </p>
                  <p>
                    Base légale : intérêt légitime (répondre à une demande
                    entrante). Durée de conservation : le temps nécessaire au
                    traitement de votre demande, selon la politique du
                    prestataire tiers.
                  </p>
                  <p>
                    Vous pouvez exercer vos droits (accès, rectification,
                    suppression) en nous contactant via le formulaire.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} NFZI Talent. Tous droits réservés.
              </p>
              <a
                href="https://bafode-cisse.vercel.app/"
                className="text-zinc-500 hover:text-zinc-700"
              >
                Développement par Karlsefni
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
