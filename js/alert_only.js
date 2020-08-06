/*
* ALERTS
* 
* 
*/

// templates buttons implementation
var templatesContainer = document.getElementById("creation_templates_container");
var certificateButtons = templatesContainer.querySelectorAll(".button_certificate");
for(var i=0; i<certificateButtons.length; i++) {
    
            if(i === 0) {
                certificateButtons[i].addEventListener("click", (evenement)=> {
                    alert(creations[0].alertCertificate[getLanguageIndex()]);
                });
            }
            if(i === 1) {
                certificateButtons[i].addEventListener("click", (evenement)=> {
                    alert(creations[1].alertCertificate[getLanguageIndex()]);
                });
            }

            if(i === 2) {
                certificateButtons[i].addEventListener("click", (evenement)=> {
                    alert(creations[2].alertCertificate[getLanguageIndex()]);
                });
            }

            if(i === 3) {
                certificateButtons[i].addEventListener("click", (evenement)=> {
                    alert(creations[3].alertCertificate[getLanguageIndex()]);
                });
            }
}

