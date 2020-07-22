/*
 * TAGS THAT NEED TEXT TRANSLATION
 */
var buttonMainRed = document.getElementById("button_main_red");

// nav elements
var navSkills = document.getElementById("nav_skills");
var navProfile = document.getElementById("nav_profile");
var navContact = document.getElementById("nav_contact");
var navCreations = document.getElementById("nav_creations");
var navIndices = document.getElementById("nav_indices");

// skills elements
var skill1 = document.getElementById("skill_1");
var skill2 = document.getElementById("skill_2");
var skill3 = document.getElementById("skill_3");

// profile elements
var profileJava = document.getElementById("profile_java");
var knowHowToBe = document.getElementById("know_how_to_be");

var buttonEditCard = document.getElementById("button_edit_card");
var buttonProfileLinkedin = document.getElementById("button_profile_linkedin");

var buttonContactLinkedIn = document.getElementById("button_contact_linkedin");

// creations elements
var creationsTitle = document.getElementById("creations_title");
var creationsUseful = document.getElementById("creations_useful");
var creationsCustom = document.getElementById("creations_custom");

var buttonCreationsView = document.getElementById("button_creations_view");

var indicesTitle = document.getElementById("indices_title");
var indicesTechnologies = document.getElementById("indices_technologies");
var buttonMore = document.getElementById("button_more");

var manchesterShowcase = document.getElementById("manchester_showcase");
var manchesterAgenda = document.getElementById("manchester_agenda");

var buttonManchesterViewSite = document.getElementById("button_manchester_view_site");

var devisInvoices = document.getElementById("devis_invoices");
var devisCartItem = document.getElementById("devis_cart_item");

var buttonDevisIntuitive = document.getElementById("button_devis_intuitive");

var buttonDevisViewInterface = document.getElementById("button_devis_view_interface");

var directMoltoGarage = document.getElementById("direct_molto_garage");
var directMoltoManagement = document.getElementById("direct_molto_management");
var moltoAgile = document.getElementById("molto_agile");

var directMoltoViewInterface = document.getElementById("direct_molto_view_interface");

var programmerMyPortfolio = document.getElementById("programmer_my_portfolio");
var programmerTestAssert = document.getElementById("programmer_test_assert");
var programmerSwitchLanguage = document.getElementById("programmer_switch_language");
var programmerShare = document.getElementById("programmer_share");
var programmerEditCards = document.getElementById("programmer_edit_cards");
var programmerSpecTech = document.getElementById("programmer_spec_tech");
var programmerWebsite = document.getElementById("programmer_website");

/* SPEC
* french at index 0, english at index 1 of an array of strings within the string object
*/



// functions translate


var languageIndex;
languageIndex = 0;
var translateTo = function translateTo(languageIndex) {
    buttonMainRed.innerHTML = string.mainRedText[languageIndex];

    navSkills.innerHTML = string.skills[languageIndex];
    navProfile.innerHTML = string.profile[languageIndex];
    navContact.innerHTML = string.contact[languageIndex];
    navCreations.innerHTML = string.creations[languageIndex];
    navIndices.innerHTML = string.indices[languageIndex];

    skill1.innerHTML = string.skill1[languageIndex];
    skill2.innerHTML = string.skill2[languageIndex];
    skill3.innerHTML = string.skill3[languageIndex];

    profileJava.innerHTML = string.profileJava[languageIndex];
    know_how_to_be.innerHTML = string.knowHowToBe[languageIndex];
    

    buttonEditCard.innerHTML = string.editCard[languageIndex];
    buttonProfileLinkedin.innerHTML = string.viewProfile[languageIndex];

    buttonContactLinkedIn.innerHTML = string.contactMe[languageIndex];

    creationsTitle.innerHTML = string.creations[languageIndex];
    creationsUseful.innerHTML = string.creationsUsefull[languageIndex];
    creationsCustom.innerHTML = string.creationsCustom[languageIndex];

    buttonCreationsView.innerHTML = string.view[languageIndex];


    indicesTitle.innerHTML = string.indices[languageIndex];
    indicesTechnologies.innerHTML = string.technologies[languageIndex];
    
    buttonMore.innerHTML = string.more[languageIndex];

    manchesterShowcase.innerHTML = string.showcaseSite[languageIndex];
    manchesterAgenda.innerHTML = string.agenda[languageIndex];
    buttonManchesterViewSite.innerHTML = string.viewSite[languageIndex];

    devisInvoices.innerHTML = string.devisInvoices[languageIndex];
    devisCartItem.innerHTML = string.cartItem[languageIndex];

    buttonDevisIntuitive.innerHTML = string.intuitive[languageIndex];

    buttonDevisViewInterface.innerHTML = string.viewInterface[languageIndex];

    directMoltoGarage.innerHTML = string.garage[languageIndex];
    directMoltoManagement.innerHTML = string.moltoManagement[languageIndex];
    moltoAgile.innerHTML = string.moltoAgile[languageIndex];
    directMoltoViewInterface.innerHTML = string.viewInterface[languageIndex];

    programmerMyPortfolio.innerHTML = string.myPortfolio[languageIndex];
    programmerTestAssert.innerHTML = string.assertTestButton[languageIndex];
    programmerSwitchLanguage.innerHTML = string.switchLanguage[languageIndex];
    programmerShare.innerHTML = string.share[languageIndex];
    programmerEditCards.innerHTML = string.programmerEditCards[languageIndex];
    programmerSpecTech.innerHTML = string.specTech[languageIndex];
    programmerWebsite.innerHTML = string.website[languageIndex];

    
}

var languageDefault = 0;
var languageCurrent = languageDefault;

var translateToFrench = function translateToFrench() {
    translateTo(0); // Index 0 for French Translation
    languageCurrent = 0;
    
}

var translateToEnglish = function translateToEnglish() {
    translateTo(1);
    languageCurrent = 1;
}

/*
* switch functions
*/










