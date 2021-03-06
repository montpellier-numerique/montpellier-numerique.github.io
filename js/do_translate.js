/*
 * TAGS THAT NEED TEXT TRANSLATION
 */

var titleWebMobileApp = document.getElementById("title_web_mobile_app");
var buttonMainRed = document.getElementById("button_main_red");

// nav elements
var navSkills = document.getElementById("nav_skills");
var navProfile = document.getElementById("nav_profile");
var navContact = document.getElementById("nav_contact");
var navCreations = document.getElementById("nav_creations");
var navIndices = document.getElementById("nav_indices");

// skills elements
var skillsTitle = document.getElementById("skills_title");
var skillsKnowHowToBe = document.getElementById("skills_know_how_to_be");
var skill1 = document.getElementById("skill_1");
var skill2 = document.getElementById("skill_2");
var skill3 = document.getElementById("skill_3");

// profile elements
var profileTitle = document.getElementById("profile_title");
var profileJava = document.getElementById("profile_java");
var knowHowToBe = document.getElementById("know_how_to_be");
var profileWebMaster = document.getElementById("profile_web_master");
var profileEgyptologist = document.getElementById("profile_egyptologist");

// contact element
var buttonContactLinkedIn = document.getElementById("button_contact_linkedin");

// creations elements
var creationsTitle = document.getElementById("creations_title");
var creationsTypes = document.getElementById("creations_types");

// indices elements
var indicesTitle = document.getElementById("indices_title");
var buttonMore = document.getElementById("button_more");




/* STATUS LANGUAGES */
const fr = 0;
const en = 1;

var languageIndex; // = fr OR en 
var languageCurrent; // = fr OR en


var getLanguageIndex = function getLanguageIndex() {
    return languageCurrent;
}


/**
 * BUTTONS TO SWITCH LANGUAGES
 */


var buttonEnglishFlag = document.getElementById("button_english_flag");
var buttonFrenchFlag = document.getElementById("button_french_flag");


var resetButtonsFlags = function resetButtonsFlags() {
    if(languageCurrent === fr) {
        buttonFrenchFlag.disabled = true;
        buttonEnglishFlag.disabled = false;
    } else if(languageCurrent === en) {
        buttonFrenchFlag.disabled = false;
        buttonEnglishFlag.disabled = true;
    }
}



// functions translate

var translateTo = function translateTo(languageIndex) {
    // switch language
    titleWebMobileApp.innerHTML = string.webMobileApp[languageIndex];
    buttonMainRed.innerHTML = string.mainRedText[languageIndex];

    navSkills.innerHTML = string.skills[languageIndex];
    navProfile.innerHTML = string.profile[languageIndex];
    navContact.innerHTML = string.contact[languageIndex];
    navCreations.innerHTML = string.creations[languageIndex];
    navIndices.innerHTML = string.indices[languageIndex];

    skillsTitle.innerHTML = string.skills[languageIndex];
    skillsKnowHowToBe.innerHTML = string.knowHowToBeAutonomous[languageIndex];
    skill1.innerHTML = string.skill1[languageIndex];
    skill2.innerHTML = string.skill2[languageIndex];
    skill3.innerHTML = string.skill3[languageIndex];

    profileTitle.innerHTML = string.profile[languageIndex];
    know_how_to_be.innerHTML = string.knowHowToBe[languageIndex];
    profileJava.value = string.profileJava[languageIndex];
    profileWebMaster.value = string.webMaster[languageIndex];
    profileEgyptologist.value = string.egyptologist[languageIndex];

    buttonContactLinkedIn.innerHTML = string.contactMe[languageIndex];

    creationsTitle.innerHTML = string.creations[languageIndex];
    creationsTypes.innerHTML = string.creationsTypes[languageIndex];

    indicesTitle.innerHTML = string.indices[languageIndex];
    buttonMore.innerHTML = string.more[languageIndex];

    // set languageCurrent for switchLanguages and reset buttonsFlags;
    languageCurrent = languageIndex;
    
    
    // load templates
    loadData(languageIndex);

    

    // reset buttons
    resetButtonsFlags();
}



/**
 * LISTENERS ON BUTTONS
 */

buttonEnglishFlag.addEventListener("click", (evenement)=>{
    translateTo(en);
});

buttonFrenchFlag.addEventListener("click", (evenement)=>{
    translateTo(fr);
});

var switchLanguages = function switchLanguages() {
    if(languageCurrent === fr) {
        translateTo(en);
    } else if(languageCurrent === en) {
        translateTo(fr);
    }
}











