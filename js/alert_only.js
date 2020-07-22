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


