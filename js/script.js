

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

/**
 * Translate
 */

var buttonSpeak = document.getElementById("button_speak");
var buttonSpeakFrench = document.getElementById("button_speak_french");
var buttonEnglishFlag = document.getElementById("button_english_flag");
var buttonFrenchFlag = document.getElementById("button_french_flag");
var buttonProgrammerSwitchLanguage = document.getElementById("button_programmer_switch_language");

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

buttonProgrammerSwitchLanguage.addEventListener("click", (evenement)=>{
    if(languageCurrent === 0) {
        translateToEnglish();
        resetTranslationButtons();
    } else if(languageCurrent === 1) {
        translateToFrench();
        resetTranslationButtons();
    }
});

/*
* edit visit cards
*/
/**
 * @ profile
 */
var buttonProfileEditCard = document.getElementById("button_profile_edit_card");
var profileCardContainer = document.getElementById("profile_card_container");
var buttonCloseProfileCard = document.getElementById("button_close_profile_card");
var buttonProfileViewPdf = document.getElementById("button_profile_view_pdf"); 

buttonProfileEditCard.addEventListener("click", (evenement)=> {
    profileCardContainer.style.display = "block";
});

buttonCloseProfileCard.addEventListener("click", (evenement)=> {
    profileCardContainer.style.display = "none";
});

buttonProfileViewPdf.addEventListener("click", (evenement)=> {
    /*use jsPdf
    * pdf view then save
    */
    // TODO
    
    // then close the edition container
    profileCardContainer.style.display = "none";
})

/*
* @ article programmer
*/

/* TODO
* on click button pdf or card pro image 
* view pdf
* option save pdf
*
* to make pdf from cardPro (<img/>)
* format a serial of cards for A4 printing
* 
*/

var viewPdfCards = function viewPdfCards() {
    /* TODO view pdf
    * first format serial on html
    * create it with js document.createElement()
    * 
    * make pdf from the tag container
    * */

    // test call fonction is ok
    alert("view pdf");
} 

var cardPro = document.getElementById("card_pro");
cardPro.addEventListener(("click"), (evenement)=> { 
    /* 
    * on click on cart pro
    * view pdf */
    viewPdfCards();

});

var button_edit_cards_pro_pdf = document.getElementById("button_edit_cards_pro_pdf");
button_edit_cards_pro_pdf.addEventListener("click", (evenement)=> {
    /* 
    * the same on click button pdf
    */
    viewPdfCards();
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
