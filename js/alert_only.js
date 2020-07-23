/*
* ALERTS
* 
* 
*/
var getLanguageIndex = function getLanguageIndex() {
    return languageCurrent;
}

var buttonCertifManchester = document.getElementById("button_certif_manchester");
buttonCertifManchester.addEventListener("click", (evenement)=> {
    alert(string.manchesterFacebook[getLanguageIndex()]);
});

var buttonCertifDevis = document.getElementById("button_certif_devis");
buttonCertifDevis.addEventListener("click", (evenement)=> {
    alert(string.devisSimple[getLanguageIndex()]);
});

var buttonCertifDirectMolto = document.getElementById("button_certif_direct_molto");
buttonCertifDirectMolto.addEventListener("click", (evenement)=> {
    alert(string.directMoltoTeamName[getLanguageIndex()]);
});

var buttonCertifProgrammer = document.getElementById("button_certif_programmer");
buttonCertifProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerTestButtons[getLanguageIndex()]);
});

var buttonProgrammerEditCard = document.getElementById("button_programmer_edit_card");
buttonProgrammerEditCard.addEventListener("click", (evenement)=> {
    alert(string.base64project[getLanguageIndex()]);
});

var buttonSiteProgrammer = document.getElementById("button_site_programmer");
buttonSiteProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerOnSite[getLanguageIndex()]);
});


