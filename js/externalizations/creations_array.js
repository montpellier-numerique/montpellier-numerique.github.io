const gitLinkPersonal = "https://gitlab.com/cjanie";
const gitLinkGarage = "https://gitlab.com/voie-de-garage";
const types = ["web site", "application"]

const creations = [
    {
        name: "manchester",
        href: "#article_manchester",
        date: 2019,
        certificate: string.facebookDeveloper,
        alertCertificate: ["site vitrine pour un bar. l'agenda des évènements est géré depuis Facebook.", "showcase site for a bar. the agenda of events is handled from Facebook."],
        title2: string.showcaseSite,
        title3: string.agenda,
        srcImage: "./images/png/manchester_site_detail_img.png",
        type: types[0],
        onLine: true,
        siteLink:"https://barmanchester.000webhostapp.com",
        technologies: ["HTML", "SDK FACEBOOK", "CSS"],
        gitLink: gitLinkPersonal
    },
    {
        name: "devis",
        href: "#article_devis",
        date: 2020,
        certificate: string.intuitive,
        alertCertificate: ["interface simple", "simple interface"],
        title2: string.devisInvoices,
        title3: string.cartItem,
        srcImage: "",
        type: types[1],
        onLine: true,
        siteLink: "https://www.linkedin.com/in/janie-chun-hung-kee-0b807238/detail/treasury/education:639285974/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAAAfXBQwBruiF1ZqnSRMO0SDfxKXRexnkHk0%2C1591097506010)&section=education%3A639285974&treasuryCount=3",
        technologies: ["JAVA", "SPRING", "ANGULAR"],
        gitLink: gitLinkPersonal
    },
    {   
        name: "direct molto",
        href: "#article_direct_molto",
        date: 2020,
        certificate: string.moltoAgile,
        alertCertificate: ["BEWEB Fondespierre Montpellier", "BEWEB Fondespierre Montpellier"],       
        title2: string.garage,
        title3: string.moltoManagement,
        srcImage: "",
        type: types[1],
        onLine: false,
        siteLink:"",
        technologies: ["SPRING", "ANGULAR", "ANDROID"],
        gitLink: gitLinkGarage
    },
    {
        name: "programmer",
        href: "#article_programmer",
        date: 2020,
        certificate: string.responsive,
        alertCertificate: ["tablette & mobile", "tablet & mobile"],
        title2: string.myPortfolio,
        title3: "",
        srcImage: "",
        type: types[0],
        onLine: true,
        siteLink:"https://programmer_montpellier_numerique",
        technologies: ["HTML", "CSS", "JS", "JSON"],
        gitLink: gitLinkPersonal
    }
];

/*
* script to list creations within html tag
*/
var listCreations = document.getElementById("list_creations");
var loadListCreations = function loadListCreations() {
    for(var i=0; i<creations.length; i++) {
        var creation = document.createElement("li");
        var link = document.createElement("a");
        link.innerHTML = creations[i].name;
        link.href = creations[i].href;
        creation.appendChild(link);
        listCreations.appendChild(creation);
    }
}
loadListCreations();
/*
* make template
*/




var loadTemplatesCreations = function loadTemplatesCreations() {
    var templatesContainer = document.getElementById("creation_templates_container");
    var template = document.getElementById("creation_template");
    

    
    for(var i=0; i<3; i++) { // excludes programmer

        var clone = document.importNode(template.content, true);

        var buttonTitle = clone.querySelectorAll("span")[0];
        buttonTitle.textContent = creations[i].name;
        var linkToArticle = clone.querySelectorAll("a")[0];
        linkToArticle.href = creations[i].href;
        
        var title = clone.querySelectorAll("h1")[0];
        title.textContent = creations[i].name + " " + creations[i].date;

        var certificate = clone.querySelectorAll("span")[1];
        certificate.textContent = creations[i].certificate;

        var buttonCertificate = clone.querySelectorAll("button")[1];
        buttonCertificate.addEventListener("click", (evenement)=> {
            alert("bla"); // TODO
        });

        var title2 = clone.querySelectorAll("h2")[0];
        title2.textContent = creations[i].title2;

        var title3 = clone.querySelectorAll("h3")[0];
        title3.textContent = creations[i].title3;

        var image = clone.querySelectorAll("img")[2];
        image.src = creations[i].srcImage;

        var view = clone.querySelectorAll("span")[2];

        if(creations[i].type === types[0]) {
            view.textContent = string.viewSite;
        } else {
            view.textContent = string.viewInterface;
        }

        var button_view = clone.querySelectorAll("button")[2]
        if(!creations[i].onLine) {
            button_view.disabled = true;
        }

        var siteLink = clone.querySelectorAll("a")[1];
        siteLink.href = creations[i].siteLink;

        var gitLink = clone.querySelectorAll("a")[2];
        gitLink.href = creations[i].gitLink; 

        var technologies = clone.querySelectorAll("span")[3];
        for(var j=0; j<creations[i].technologies.length; j++) {
            technologies.textContent += creations[i].technologies[j] + " ";
        }

        templatesContainer.appendChild(clone);
    }

}

loadTemplatesCreations();


