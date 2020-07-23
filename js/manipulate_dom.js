/**
 * ADD LISTENERS ON BUTTONS
 * SHOW AND HIDE CONTAINERS
 * ALERTS
 */

/*
* 1) TURN ON THE LIGHT
*/

var logo = document.getElementById("logo");
buttonMainRed.addEventListener("click", (evenement)=> {
    logo.style.color = "white";
    buttonMainRed.style.color = "white";
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
    alert(string.useBase64AndJsPDF[getLanguageIndex()]);

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



