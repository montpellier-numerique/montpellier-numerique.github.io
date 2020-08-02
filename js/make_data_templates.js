/*
* make template: called in set id: called in load data: called in load list creations
* 
*/


var makeTemplates = function makeTemplates() {
    var template = document.getElementById("creation_template");
    var templatesContainer = document.getElementById("creation_templates_container");
    var numberOfTemplates = templatesContainer.querySelectorAll("article").length;
    
    for(var i=0; i<creations.length; i++) {
        if(!(numberOfTemplates === creations.length)) {
            var clone = template.cloneNode(true);
            templatesContainer.appendChild(document.importNode(clone.content, true));
        }
        
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



var loadData = function loadData(languageIndex) {
    var templatesContainer = setArticlesId();

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
                if(!(creations[j].specTech === "")) {
                    spectTechs[i].textContent = creations[j].specTech[languageIndex];
                } else {
                    spectTechs[i].style.display = "none";
                }
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

    // TODO to separate from loadData to not have alert twice when switch languages
    var certificateButtons = templatesContainer.querySelectorAll(".button_certificate");
    for(var i=0; i<certificateButtons.length; i++) {
        
                if(i === 0) {
                    certificateButtons[i].addEventListener("click", (evenement)=> {
                        alert(creations[0].alertCertificate[getLanguageIndex()]);
                    });
                }
                if(i === 1) {
                    certificateButtons[i].addEventListener("click", (evenement)=> {
                        alert(creations[1].alertCertificate[getLanguageIndex()]);
                    });
                }

                if(i === 2) {
                    certificateButtons[i].addEventListener("click", (evenement)=> {
                        alert(creations[2].alertCertificate[getLanguageIndex()]);
                    });
                }

                if(i === 3) {
                    certificateButtons[i].addEventListener("click", (evenement)=> {
                        alert(creations[3].alertCertificate[getLanguageIndex()]);
                    });
                }
    }
    
    
    

    var images = templatesContainer.querySelectorAll(".image > img");
    for(var i=0; i<images.length; i++) {
        for(var j=0; j<creations.length; j++) {
            if(!(i === 3)) { // 3 is programmer which has a special traitement
                if(i === j) {
                    images[i].src = creations[j].srcImages[0];
                }
            } else { // programmer switches languages
                if(languageIndex === fr) {
                images[i].src = creations[j].srcImages[0];
                } else if(languageIndex === en) {
                    images[i].src = creations[j].srcImages[1];
                }      
            }
        }
    }
    images[3].style.maxWidth = "365px";

    
    

    
    

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
            if(!(i === 3)) { // exepts programmer 
                if(i === j) {
                    if(creations[j].onLine === false) {
                        viewButtons[i].disabled = true;
                    }
                }
            } else { // special traitement for programmer
                viewButtons[i].style.display = "none";
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
    var programmerCustom = templatesContainer.querySelectorAll(".test > div");
    var buttonProgrammerSwitchLanguages = document.createElement("button");
    buttonProgrammerSwitchLanguages.id = "button_programmer_switch_language"
    var switchImage = document.createElement("img");
    switchImage.className = "icon_button";
    switchImage.src="icons/switch.svg"
    var switchSpan = document.createElement("span");
    switchSpan.innerHTML = string.switchLanguage[languageIndex];
    buttonProgrammerSwitchLanguages.appendChild(switchImage);
    buttonProgrammerSwitchLanguages.appendChild(switchSpan);
    buttonProgrammerSwitchLanguages.addEventListener("click", (evenement)=> {
        switchLanguages();
    });
    programmerCustom[3].innerHTML = "";
    programmerCustom[3].appendChild(buttonProgrammerSwitchLanguages);

}

