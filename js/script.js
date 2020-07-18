

/**
 * BUTTONS
 */

/*
* Turn on the light
*/
var buttonMainRed = document.getElementById("button_main_red");
var logo = document.getElementById("logo");
buttonMainRed.addEventListener("click", (evenement)=> {
    logo.style.color = "white";
    buttonMainRed.style.color = "white";
});

/*
 * Translate
 */
var buttonSpeak = document.getElementById("button_speak");
var buttonSpeakFrench = document.getElementById("button_speak_french");
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


// translate to English
buttonSpeak.addEventListener("click", (evenement)=> {
    // translation
    buttonMainRed.innerHTML = string.mainRedText[1]; // Index 1 for English Translation

    navSkills.innerHTML = string.skills[1];
    navProfile.innerHTML = string.profile[1];
    navContact.innerHTML = string.contact[1];
    navCreations.innerHTML = string.creations[1];
    navIndices.innerHTML = string.indices[1];

    skill1.innerHTML = string.skill1[1];
    skill2.innerHTML = string.skill2[1];
    skill3.innerHTML = string.skill3[1];

    // buttons behavior
    buttonSpeak.style.display = "none";
    buttonSpeakFrench.style.display = "block";
});

// translate to French
buttonSpeakFrench.addEventListener("click", (evenement)=> {
    // translation
    buttonMainRed.innerHTML = string.mainRedText[0]; // Index 0 for French Translation

    navSkills.innerHTML = string.skills[0];
    navProfile.innerHTML = string.profile[0];
    navContact.innerHTML = string.contact[0];
    navCreations.innerHTML = string.creations[0];
    navIndices.innerHTML = string.indices[0];

    skill1.innerHTML = string.skill1[0];
    skill2.innerHTML = string.skill2[0];
    skill3.innerHTML = string.skill3[0];

    profileKnowHowToBe.innerHTML = string.knowHowToBe[0];

    // buttons behavior
    buttonSpeakFrench.style.display = "none";
    buttonSpeak.style.display = "block";
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
buttonSpecTechProgrammer.addEventListener("click", (evenement)=> {
    specTechProgrammer.style.display = "block";
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
