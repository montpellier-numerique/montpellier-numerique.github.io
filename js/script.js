
/**
 * THIS FILE DEALS WITH LISTENERS ON BUTTONS
 * 1) BUTTONS FOR TRANSLATION
 * 2) BUTTONS TO SHOW AND HIDE CONTAINERS (DOM MANIPULATION)
 * 3) ALERTS
 * 
 */

/*
* TURN ON THE LIGHT
*/

var logo = document.getElementById("logo");
buttonMainRed.addEventListener("click", (evenement)=> {
    logo.style.color = "white";
    buttonMainRed.style.color = "white";
});

/**
 * 1) BUTTONS FOR TRANSLATION
 * 
 * reference: file do_translate.js
 * 
 * functions: 
 * - translateToEnglish()
 * - translateToFrench()
 * 
 * variables:
 * - languageCurrent // 0 or 1
 */


var buttonEnglishFlag = document.getElementById("button_english_flag");
var buttonFrenchFlag = document.getElementById("button_french_flag");
var buttonProgrammerSwitchLanguage = document.getElementById("button_programmer_switch_language");

buttonEnglishFlag.addEventListener("click", (evenement)=>{
    translateToEnglish();
});

buttonFrenchFlag.addEventListener("click", (evenement)=>{
    translateToFrench();
});

buttonProgrammerSwitchLanguage.addEventListener("click", (evenement)=>{
    if(languageCurrent === 0) {
        translateToEnglish();
    } else if(languageCurrent === 1) {
        translateToFrench();
    }
});

/*
* 2) DOM MANIPULATION
*/
/**
 * @ profile edit card
 */
var buttonProfileEditCard = document.getElementById("button_profile_edit_card");
var profileCardContainer = document.getElementById("profile_card_container");
var buttonCloseProfileCard = document.getElementById("button_close_profile_card");
var buttonProfileMakePdf = document.getElementById("button_profile_make_pdf");

buttonProfileEditCard.addEventListener("click", (evenement)=> {
    // show card container
    profileCardContainer.style.display = "block";

    // desable button_profile_edit_card
    buttonProfileEditCard.disabled = true;
});

buttonCloseProfileCard.addEventListener("click", (evenement)=> {
    // hide card container
    profileCardContainer.style.display = "none";

    // enable button_profile_edit_card
    buttonProfileEditCard.disabled = false;
});

buttonProfileMakePdf.addEventListener("click", (evenement)=> {
    // alert base64 jspdf
    alert(string.useBase64AndJsPDF[languageIndex]);

    // then close the card container
    profileCardContainer.style.display = "none";

    // enable button profile_edit_card
    buttonProfileEditCard.disabled = false;
});



/*
* @ indices show more
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

    var rows = tableIndices.getElementsByTagName("tr");
    var originalRows = rows.length - indices.length;
    for(var i=originalRows; i<rows.length; i++) {
        rows[i].style.display = "none";
    }

    buttonHide.style.display = "none";
    buttonMore.style.display="inline-block";
});


/*
* @ programmer spec tech
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
* 3) ALERTS
* 
* references: 
* - file externalisations/string_objet_internationalization.js
* - file do_translate.js
* 
* variables: 
* - string // JSON object
* - languageIndex
*/
var buttonCertifManchester = document.getElementById("button_certif_manchester");
buttonCertifManchester.addEventListener("click", (evenement)=> {
    alert(string.manchesterFacebook[languageIndex]);
});

var buttonCertifDevis = document.getElementById("button_certif_devis");
buttonCertifDevis.addEventListener("click", (evenement)=> {
    alert(string.devisSimple[languageIndex]);
});

var buttonCertifDirectMolto = document.getElementById("button_certif_direct_molto");
buttonCertifDirectMolto.addEventListener("click", (evenement)=> {
    alert(string.directMoltoTeamName[languageIndex]);
});

var buttonCertifProgrammer = document.getElementById("button_certif_programmer");
buttonCertifProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerTestButtons[languageIndex]);
});

var buttonProgrammerEditCard = document.getElementById("button_programmer_edit_card");
buttonProgrammerEditCard.addEventListener("click", (evenement)=> {
    alert(string.base64project[languageIndex]);
});

var buttonSiteProgrammer = document.getElementById("button_site_programmer");
buttonSiteProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerOnSite[languageIndex]);
});
