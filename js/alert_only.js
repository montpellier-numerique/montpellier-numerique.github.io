/*
* ALERTS
* 
* 
*/
var getLanguageIndex = function getLanguageIndex() {
    return languageCurrent;
}


var buttonCertifProgrammer = document.getElementById("button_certif_programmer");
buttonCertifProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerResponsive[getLanguageIndex()]);
});

var buttonProgrammerEditCard = document.getElementById("button_programmer_edit_card");
buttonProgrammerEditCard.addEventListener("click", (evenement)=> {
    alert(string.base64project[getLanguageIndex()]);
});

var buttonSiteProgrammer = document.getElementById("button_site_programmer");
buttonSiteProgrammer.addEventListener("click", (evenement)=> {
    alert(string.programmerOnSite[getLanguageIndex()]);
});


