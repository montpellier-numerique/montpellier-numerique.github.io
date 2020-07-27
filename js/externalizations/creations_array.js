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
        gitLink: gitLinkPersonal + "/devis"
    },
    {   
        name: "direct molto",
        href: "#article_direct_molto",
        date: 2020,
        certificate: ["équipe molto AGILE", "molto AGILE team"],
        alertCertificate: ["BEWEB Fondespierre Montpellier", "BEWEB Fondespierre Montpellier"],       
        title2: string.garage,
        title3: ["admin + gérant + tablette du mécanicien", "admin + manager + tablet for the mechanic"],
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
        gitLink: gitLinkPersonal + "/programmer-portfolio"
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

/*
* make template
* https://javascript.info/template-element !!! getElementById()
*/



function loadTemplatesCreations(languageIndex) {
    var templatesContainer = document.getElementById("creation_templates_container");
    var template = document.getElementById("creation_template");
    templatesContainer.innerHTML="";
    for(var i=0; i<creations.length; i++) {
        if(!(i === 3)) { // excludes programmer which has a special design
            var clone = document.importNode(template.content, true);
            

            var spanToArticleClone = clone.querySelectorAll("span")[0];
            spanToArticleClone.textContent = creations[i].name;


            var title = clone.querySelectorAll("h1")[0];
            title.textContent = creations[i].name + " " + creations[i].date;

            var image = clone.querySelectorAll("img")[2];
            image.src = creations[i].srcImage;

            var spanCertificate = clone.querySelectorAll("span")[1];
            spanCertificate.textContent = creations[i].certificate[languageIndex];

            var title2 = clone.querySelectorAll("h2")[0];
            var title3 = clone.querySelectorAll("h3")[0];
            title2.textContent = creations[i].title2[languageIndex];
            title3.textContent = creations[i].title3[languageIndex];

            var spanView = clone.querySelectorAll("span")[2];
            if(creations[i].type === types[0]) {
                spanView.textContent = string.viewSite[languageIndex];
            } else {
                spanView.textContent = string.viewInterface[languageIndex];
            }

            var buttonView = clone.querySelectorAll("button")[2]
                if(!creations[i].onLine) {
                    buttonView.disabled = true;
                }

            var siteLink = clone.querySelectorAll("a")[1];
            siteLink.href = creations[i].siteLink;

            var gitLink = clone.querySelectorAll("a")[2];
            gitLink.href = creations[i].gitLink; 

            var spanTechnologies = clone.querySelectorAll("span")[3];
            for(var j=0; j<creations[i].technologies.length; j++) {
                spanTechnologies.textContent += creations[i].technologies[j] + " ";
            }


            var articleCreation = clone.querySelectorAll("article")[0];
            //articleCreation.id = creations[i].href;
            // TODO
            var linkToArticle = clone.querySelectorAll("a")[0];
            //linkToArticle.href = articleCreation.id;
            //TODO

            var buttonHeader = clone.querySelectorAll("button")[0];
            buttonHeader.addEventListener("click", (evenement)=> {
               // TODO href
               window.location.href = "#article_creation";
            });



           

            templatesContainer.appendChild(clone);
            
            
        }
    }
}


