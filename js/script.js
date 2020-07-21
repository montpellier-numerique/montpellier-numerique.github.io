

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
var buttonProfileMakePdf = document.getElementById("button_profile_make_pdf");
var imageVisitCardLightOff = document.getElementById("visit_card_light_off")

buttonProfileEditCard.addEventListener("click", (evenement)=> {
    profileCardContainer.style.display = "block";
    buttonProfileEditCard.disabled = true;
});

buttonCloseProfileCard.addEventListener("click", (evenement)=> {
    profileCardContainer.style.display = "none";
    buttonProfileEditCard.disabled = false;
});
/*
var openPdf = function openPdf() {
    var margins = {
        top: 20,
        bottom: 20,
        left: 20,
        width:850
    };
    var pdf = new jsPDF();
    
    pdf.fromHTML(
        profileCardContainer.innerHTML, // html
        margins.left, // x
        margins.top, // y
        {width: margins.width}
        );
    
    
    //pdf.output("dataurlnewwindow");
    pdf.save("pdf.pdf");
};
*/

var margins = {
    top: 0,
    bottom: 0,
    left: 0,
    width: 200
}

var source = document.getElementById("pdf_light_off");
var image= document.getElementById("visit_card_light_off");

image.style.width = 850;
image.style.height = 540;

function imageToBase64(image) {
    // create canvas to draw image within
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    // set width and height of canvas equals to image size
    canvas.width = image.style.width;
    canvas.height = image.style.height;

    //image.crossOrigin = "*";

    context.drawImage(image, 0, 0);
    return canvas.toDataURL();

};

var getDataUrl = function getDataUrl(image) {
    // create canvas to draw image within
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    // set width and height of canvas equals to image size
    canvas.width = image.style.width;
    canvas.height = image.style.height;

    // draw within canvas
    context.drawImage(image, 0, 0);

    // return data url
    return canvas.toDataURL("image/png");
};
/*
image.addEventListener("load", function(event) {
    var dataUrl = getDataUrl(event.currentTarget);
    console.log(dataUrl);
});
*/
var getDataUrlCardLightOff = function getDataUrlCardLightOff() {
    getDataUrl(image);
}

var viewPdf = function viewPdf() {
    // create pdf
    var pdf = new jsPDF("portrait", "mm", "a4");

    // create canvas to add image to pdf
    var canvas = document.createElement("canvas");
    canvas.width = 85;
    canvas.height = 54;
    var context = canvas.getContext("2d");

    
    
    // test image ok
    // profileCardContainer.innerHTML = "";
    // profileCardContainer.appendChild(image);

    // image into canvas into pdf TODO 
    // show canvas but not image
    
    image.onload = function() { // necessary to compile pdf
        context.drawImage(image, 10, 10, canvas.width, canvas.height);
    }
    
    pdf.addImage(canvas, "PNG", margins.top, margins.left, canvas.width, canvas.height); // x, y, width, height
    //pdf.addImage(canvas.toDataURL("image/svg", "SVG", margins.top, margins.left, canvas.width, canvas.height));

    // set output
    pdf.output("dataurlnewwindow"); // "datauri" in same window

    // test canvas with image ok
    context.drawImage(image, 10, 10, canvas.width, canvas.height); // but pdf doesn' compile
    profileCardContainer.innerHTML = "";
    profileCardContainer.appendChild(canvas);
};


buttonProfileMakePdf.addEventListener("click", (evenement)=> {
    imageToBase64(image);
    // getDataUrl(image);
    //getDataUrlCardLightOff();
    viewPdf();
    //downloadPdf();
    //openPdf();
    /*use jsPdf
    * pdf view then save
    */
    // TODO
    //var cardPdf = new jsPDF();
    //cardPdf.text(3, 3, "hello");
    //cardPdf.addImage(imageVisitCardLightOff);
    /*
    cardPdf.fromHTML(imageVisitCardLightOff, 15, 15, {
        "width": 180,
    });
    cardPdf.autoPrint();
    cardPdf.output("dataurlnewwindow");
    */
    //cardPdf.save("card.pdf");

    // then close the edition container
    // profileCardContainer.style.display = "none";
    buttonProfileEditCard.disabled = false;
});

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
