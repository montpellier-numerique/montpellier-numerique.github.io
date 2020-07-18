

/**
 * BUTTONS
 */

/*
* Turn on the light
*/

var logo = document.getElementById("logo");
buttonMainRed.addEventListener("click", (evenement)=> {
    logo.style.color = "white";
    buttonMainRed.style.color = "white";
});


var buttonSpeak = document.getElementById("button_speak");
var buttonSpeakFrench = document.getElementById("button_speak_french");
var buttonEnglishFlag = document.getElementById("button_english_flag");
var buttonFrenchFlag = document.getElementById("button_french_flag");

var resetTranslationButtons = function resetTranslationButtons(){
    if(languageCurrent === 0) {
        buttonSpeakFrench.style.display = "none";
        buttonSpeak.style.display = "block";
    } else if(languageCurrent === 1) {
        buttonSpeakFrench.style.display = "block";
        buttonSpeak.style.display ="none";
    } else {
        buttonSpeak.style.display = "block";
        buttonSpeakFrench = "block"
    }
}

// translate to English
buttonSpeak.addEventListener("click", (evenement)=> {
    translateToEnglish();
    // buttons behavior
    resetTranslationButtons();
    
});

// translate to French
buttonSpeakFrench.addEventListener("click", (evenement)=> {
    translateToFrench();
    // buttons behavior
    resetTranslationButtons();
});

buttonEnglishFlag.addEventListener("click", (evenement)=>{
    translateToEnglish();
    resetTranslationButtons();
});

buttonFrenchFlag.addEventListener("click", (evenement)=>{
    translateToFrench();
    resetTranslationButtons();
});

/*
* edit card
*/
var buttonEditCard = document.getElementById("button_edit_card");
var imgCartPro = document.getElementById("img_cart_pro");
buttonEditCard.addEventListener("click", (evenement)=> {
    imgCartPro.style.display = "block";
});

/*
* show more
*/

var buttonMore = document.getElementById("button_more");
var tableIndices = document.getElementById("table_indices");
var buttonHide = document.getElementById("button_hide");
buttonMore.addEventListener("click", (evenement)=> {
    
    for(var i=0; i<indices.length; i++) {
        var row = document.createElement("tr");
        var col = document.createElement("td");
        col.innerHTML = indices[i].toUpperCase();
        col.style.float ="right";
        row.appendChild(col);
        tableIndices.appendChild(row);
    }

    buttonMore.style.display = "none";
    buttonHide.style.display= "inline-block";
    
});

buttonHide.addEventListener("click", (evenement)=> {

    // TODO
    var rows = tableIndices.getElementsByTagName("tr");
    var originalRows = rows.length - indices.length;
    for(var i=originalRows; i<rows.length; i++) {
        rows[i].style.display = "none";
    }

    buttonHide.style.display = "none";
    buttonMore.style.display="inline-block";
});


/*
* manipulate DOM
*/
var buttonSpecTechProgrammer = document.getElementById("button_spec_tech_programmer");
var specTechProgrammer = document.getElementById("spec_tech_programmer");
var buttonCloseSpecTechProgrammer = document.getElementById("button_close_spec_tech_programmer");
buttonSpecTechProgrammer.addEventListener("click", (evenement)=> {
    specTechProgrammer.style.display = "block";
    buttonSpecTechProgrammer.style.display = "none";
    buttonCloseSpecTechProgrammer.style.display = "inline-block";
});

buttonCloseSpecTechProgrammer.addEventListener("click", (evenement)=>{
    specTechProgrammer.style.display = "none";
    buttonCloseSpecTechProgrammer.style.display = "none";
    buttonSpecTechProgrammer.style.display = "inline-block";
});



/*
* alerts
*/
var buttonCertifManchester = document.getElementById("button_certif_manchester");
buttonCertifManchester.addEventListener("click", (evenement)=> {
    alert("site vitrine pour un bar. l'agenda des évènements est géré depuis Facebook Events.");
});

var buttonCertifDevis = document.getElementById("button_certif_devis");
buttonCertifDevis.addEventListener("click", (evenement)=> {
    alert("interface simple");
});

var buttonCertifDirectMolto = document.getElementById("button_certif_direct_molto");
buttonCertifDirectMolto.addEventListener("click", (evenement)=> {
    alert("BEWEB Fondespierre Montpellier");
});

var buttonCertifProgrammer = document.getElementById("button_certif_programmer");
buttonCertifProgrammer.addEventListener("click", (evenement)=> {
    alert("ceci est une invitation à tester les boutons.");
});

var buttonSiteProgrammer = document.getElementById("button_site_programmer");
buttonSiteProgrammer.addEventListener("click", (evenement)=> {
    alert("vous êtes sur le site vitrine https://programmer_montpellier_numerique");
});
