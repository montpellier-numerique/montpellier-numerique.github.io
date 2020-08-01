const gitLinkPersonal = "https://gitlab.com/cjanie";
const gitLinkGarage = "https://gitlab.com/voie-de-garage";
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
        srcImages: ["./images/png/manchester_site_img.png", "./images/png/manchester_site_responsive.png", "./images/png/manchester_site_detail_img.png"],
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
        srcImages: ["./images/png/devis_boutique.png", "./images/png/devis_edit.png", "./images/png/devis_facture.png", "./images/png/devis_factures.png"],
        type: types[1],
        onLine: true,
        siteLink: "https://www.linkedin.com/in/janie-chun-hung-kee-0b807238/detail/treasury/education:639285974/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAAAfXBQwBruiF1ZqnSRMO0SDfxKXRexnkHk0%2C1591097506010)&section=education%3A639285974&treasuryCount=3",
        technologies: ["JAVA", "SPRING", "ANGULAR"],
        gitLink: gitLinkPersonal + "/devis"
    },
    {   
        name: "direct molto",
        id: "article_direct_molto",
        date: 2020,
        certificate: ["équipe molto AGILE", "molto AGILE team"],
        alertCertificate: ["BEWEB Fondespierre Montpellier", "BEWEB Fondespierre Montpellier"],       
        title2: string.garage,
        title3: ["gérant + tablette du mécanicien", "manager + tablet for the mechanic"],
        specTech: "",
        srcImages: ["", ""],
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
        alertCertificate: ["tablette & mobile", "tablet & mobile"],
        title2: string.myPortfolio,
        title3: string.multilingual,
        specTech: string.programmerMultilingualText,
        srcImages: ["./images/png/visit_cards/visit_card_fr_light_on.png", "./images/png/visit_cards/visit_card_en_light_on.png"],
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

var loadListCreations = function loadListCreations() {
    var listCreations = document.getElementById("list_creations");
    for(var i=0; i<creations.length; i++) {
        
        var creation = document.createElement("li");  
        creation.innerHTML = creations[i].name;

        var link = document.createElement("a");
        
        link.href = "#" + creations[i].id;

        link.appendChild(creation);
        listCreations.appendChild(link);
    }
}

/*
* make template: called in set id: called in load data: called in load list creations
* 
*/


var makeTemplates = function makeTemplates() {
    var template = document.getElementById("creation_template");
    var templatesContainer = document.getElementById("creation_templates_container");

    for(var i=0; i<creations.length; i++) {
        
        var clone = template.cloneNode(true);
        templatesContainer.appendChild(document.importNode(clone.content, true));
    }
    return templatesContainer;
}



var setArticlesId = function setArticlesId() {
    var templatesContainer = makeTemplates();

    var articles = templatesContainer.querySelectorAll("article");
    console.log(articles.length.toString());
    for(var i=0; i<articles.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                articles[i].id = creations[j].id;
                console.log(articles[i].id);
            }
        }
    }
    return templatesContainer;
};



var loadData = function loadData() {
    var templatesContainer = setArticlesId();

    var headerSpans = templatesContainer.querySelectorAll(".button_header > span");
    for(var i=0; i<headerSpans.length; i++) {
        
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                headerSpans[i].textContent = creations[j].name;
            }
        }  
    }

    var headerLinks = templatesContainer.querySelectorAll(".creation_template_header > a");
    for(var i=0; i<headerLinks.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                headerLinks[i].href = "#" + creations[j].id;
            }
        }
    }

    var titles = templatesContainer.querySelectorAll(".article_header > h1");
    for(var i=0; i<titles.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                titles[i].textContent = creations[j].name + " " + creations[j].date;
            }
        }
    }

    var subtitles = templatesContainer.querySelectorAll(".promotion > h2");
    
    for(var i=0; i<subtitles.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                subtitles[i].textContent = creations[j].title2[languageIndex];
            }
        }
    }

    var thirdTitles = templatesContainer.querySelectorAll(".promotion > h3");
    for(var i=0; i<thirdTitles.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                thirdTitles[i].textContent = creations[j].title3[languageIndex];
            }
        }
    }

    var spectTechs = templatesContainer.querySelectorAll(".spec_tech > p");
    for(var i=0; i<spectTechs.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                spectTechs[i].textContent = creations[j].specTech[languageIndex];
            }
        }
    }

    var certificateSpans = templatesContainer.querySelectorAll(".button_certificate > span");
    for(var i=0; i<certificateSpans.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                certificateSpans[i].textContent = creations[j].certificate[languageIndex];
            }
        }
    }

    var images = templatesContainer.querySelectorAll(".image > img");

    // set images
    for(var i=0; i<images.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                images[i].src = creations[j].srcImages[0];
            }
        }    
    }

    // add listeners on images
    var modal = document.getElementById("modal_images");
    //    
    for(var i=0; i<images.length; i++) {
       
        
        var src = images[i].src;
        //alert("src:" + src); test OK
        var templateImage = images[i];
        //alert("templateImage.src: " + templateImage.src); // test = OK

        src = templateImage.src;
        //alert("src:" + src); // test OK: les 4 src
        // listener
        templateImage.addEventListener("click", (evenement)=> {
            var image = document.createElement("img");
            alert("alert 1: " + templateImage.src); // not ok: only the last src

            for(var i=0; i<creations.length; i++) {
                
                
                
                for(var j=0; j<creations[i].srcImages.length; j++) {
                    
                        
                            
                            alert("alert 2: " + creations[i].srcImages[j]); // test ok : all src 
                            
                         
                    
                }

            
            }

            
            
            
            
            alert("coucouc"); // OK

            
            
                   
                    //modal.innerHTML = "";
                    //modal.appendChild(image);
        
            
        }); 
        
        
            
       
    
          
    }
    

    
    

    var viewSpans = templatesContainer.querySelectorAll(".view_button > span");
    for(var i=0; i<viewSpans.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                if(creations[j].type === types[0]) {
                    viewSpans[i].textContent = string.viewSite[getLanguageIndex()];
                } else if(creations[j].type === types[1]) {
                    viewSpans[i].textContent = string.viewInterface[getLanguageIndex()];
                }
            }
                
                    
        }
    }

    var viewButtons = templatesContainer.querySelectorAll(".view_link > button");
    for(var i=0; i<viewButtons.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                if(creations[j].onLine === false) {
                    viewButtons[i].disabled = true;
                }
            }
        }
    }

    var viewLinks = templatesContainer.querySelectorAll(".view > a");
    for(var i=0; i<viewLinks.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                if(creations[j].onLine) {
                    viewLinks[i].href = creations[j].siteLink;
                }
            }
        }
    }
    

    var gitSpans = templatesContainer.querySelectorAll(".git_button > span");
    for(var i=0; i<gitSpans.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                var stringTechnologies = "";
                for(var k=0; k<creations[j].technologies.length; k++) {
                    var technolgy = creations[j].technologies[k];
                    stringTechnologies += technolgy + " ";
                }
                gitSpans[i].textContent = stringTechnologies;
            }   
        }
    }

    var gitLinks = templatesContainer.querySelectorAll(".git > a");
    for(var i=0; i<gitLinks.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(i === j) {
                gitLinks[i].href = creations[j].gitLink;
            }
        }
    }

    /**programmer customized */
    /*
    var programmer = templatesContainer.querySelectorAll("article")[3];
    var programmerCustom = document.getElementById("article_programmer_custom");
    var clone = programmerCustom.cloneNode(true);
    programmer.innerHTML="";
    programmer.appendChild(clone); 
    */
}

