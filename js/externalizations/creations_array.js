const gitLinkPersonal = "https://gitlab.com/cjanie";
const gitLinkGarage = "https://gitlab.com/voie-de-garage";
const gitLinkMontpellierNumerique = "https://github.com/montpellier-numerique/montpellier-numerique.github.io";
const types = ["web site", "application"]

const creations = [
    {
        name: "manchester",
        id: "article_manchester",
        date: 2019,
        certificate: string.facebookDeveloper,
        alertCertificate: ["site vitrine pour un bar. l'agenda des évènements est géré depuis Facebook.", "showcase site for a bar. the agenda of events is handled from Facebook."],
        title2: string.showcaseSite,
        title3: string.agenda,
        specTech: "",
        srcImages: ["./images/png/manchester_site_img.png"],
        type: types[0],
        onLine: true,
        siteLink:"https://barmanchester.000webhostapp.com",
        technologies: ["HTML", "SDK FACEBOOK", "CSS"],
        gitLink: gitLinkPersonal
    },
    {
        name: "devis",
        id: "article_devis",
        date: 2020,
        certificate: string.intuitive,
        alertCertificate: ["interface simple", "simple interface"],
        title2: string.devisInvoices,
        title3: string.cartItem,
        specTech: "",
        srcImages: ["./images/png/devis_boutique.png"],
        type: types[1],
        onLine: true,
        siteLink: "https://docs.google.com/presentation/d/1TvCWuxieDKs2p0vnsCmtQDcZ0QcpFH9z936s0B1IySA/edit?usp=sharing",
        technologies: ["JAVA", "SPRING", "ANGULAR"],
        gitLink: gitLinkPersonal + "/devis"
    },
    {   
        name: "direct molto",
        id: "article_direct_molto",
        date: 2020,
        certificate: ["équipe molto AGILE", "molto AGILE team"],
        alertCertificate: ["projet conducteur de la formation java à BEWEB Fondespierre Montpellier (2019-2020)", "guideline project of the java course at BEWEB Fondespierre Montpellier (2019-2020)"],       
        title2: string.garage,
        title3: ["gérant + tablette du mécanicien", "manager + tablet for the mechanic"],
        specTech: "",
        srcImages: [""],
        type: types[1],
        onLine: false,
        siteLink:"",
        technologies: ["SPRING", "ANGULAR", "ANDROID"],
        gitLink: gitLinkGarage
    },
    {
        name: "programmer",
        id: "article_programmer",
        date: 2020,
        certificate: string.responsive,
        alertCertificate: ["tablette & mobile 801px, 641px, 481px, 320px", "tablet & mobile 801px, 641px, 481px, 320px"],
        title2: string.myPortfolio,
        title3: string.multilingual,
        specTech: string.programmerMultilingualText,
        srcImages: ["./images/png/visit_cards/visit_card_fr_light_on.png", "./images/png/visit_cards/visit_card_en_light_on.png"],
        type: types[0],
        onLine: true,
        siteLink:"https://programmer_montpellier_numerique",
        technologies: ["HTML", "CSS", "JS", "JSON"],
        gitLink: gitLinkMontpellierNumerique
    }
];
