/*
* make template: called in set id: called in load data
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
    for(var i=0; i<articles.length; i++) {
        articles[i].id = creations[i].id;
    }
    return templatesContainer;
}

var loadData = function loadData(languageIndex) {
    var templatesContainer = setArticlesId();

    var titles = templatesContainer.querySelectorAll(".article_header > h1");
    for(var i=0; i<titles.length; i++) {
        titles[i].textContent = creations[i].name + " " + creations[i].date;
    }

    var subtitles = templatesContainer.querySelectorAll(".promotion > h2");   
    for(var i=0; i<subtitles.length; i++) {    
        subtitles[i].textContent = creations[i].title2[languageIndex];
    }

    var thirdTitles = templatesContainer.querySelectorAll(".promotion > h3");
    for(var i=0; i<thirdTitles.length; i++) {
        thirdTitles[i].textContent = creations[i].title3[languageIndex];
    }

    var spectTechs = templatesContainer.querySelectorAll(".spec_tech > p");
    for(var i=0; i<spectTechs.length; i++) {
        if(!(creations[i].specTech === "")) {
            spectTechs[i].textContent = creations[i].specTech[languageIndex];
        } else {
            spectTechs[i].style.display = "none";
        }
    }

    var certificateSpans = templatesContainer.querySelectorAll(".button_certificate > span");
    for(var i=0; i<certificateSpans.length; i++) {    
        certificateSpans[i].textContent = creations[i].certificate[languageIndex];
    }

    var images = templatesContainer.querySelectorAll(".image > img");
    for(var i=0; i<images.length; i++) {
        if(!(i === 3)) { // 3 is programmer which has a special traitement
            images[i].src = creations[i].srcImages[0];
        } else { // special traitement for programmer
            images[i].style.maxWidth = "365px"; // visit card size
            // programmer switches languages
            if(languageIndex === fr) {
            images[i].src = creations[i].srcImages[0];
            } else if(languageIndex === en) {
                images[i].src = creations[i].srcImages[1];
            }  
        }
    }
    
    var viewSpans = templatesContainer.querySelectorAll(".view_button > span");
    for(var i=0; i<viewSpans.length; i++) {
        if(creations[i].type === types[0]) {
            viewSpans[i].textContent = string.viewSite[getLanguageIndex()];
        } else if(creations[i].type === types[1]) {
            viewSpans[i].textContent = string.viewInterface[getLanguageIndex()];
        }
    }

    var viewButtons = templatesContainer.querySelectorAll(".view_link > button");
    for(var i=0; i<viewButtons.length; i++) {
        if(!(i === 3)) { // exepts programmer         
            if(creations[i].onLine === false) {
            viewButtons[i].disabled = true;
            }
        } else { // special traitement for programmer
            viewButtons[i].style.display = "none";
        } 
    }

    var viewLinks = templatesContainer.querySelectorAll(".view > a");
    for(var i=0; i<viewLinks.length; i++) {
        if(creations[i].onLine) {
            viewLinks[i].href = creations[i].siteLink;
        }     
    }
    

    var gitSpans = templatesContainer.querySelectorAll(".git_button > span");
    for(var i=0; i<gitSpans.length; i++) {
        var stringTechnologies = "";
        for(var j=0; j<creations[i].technologies.length; j++) {
            var technolgy = creations[i].technologies[j];
            stringTechnologies += technolgy + " ";
        }
        gitSpans[i].textContent = stringTechnologies;         
    }

    var gitLinks = templatesContainer.querySelectorAll(".git > a");
    for(var i=0; i<gitLinks.length; i++) {    
        gitLinks[i].href = creations[i].gitLink;
    }

    /** programmer customized : button switch languages*/
    var programmerCustom = templatesContainer.querySelectorAll(".language");
    var buttonProgrammerSwitchLanguages = document.createElement("button");
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

