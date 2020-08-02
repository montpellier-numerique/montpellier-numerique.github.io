

/**
 * ADD LISTENERS ON BUTTONS
 * SHOW AND HIDE CONTAINERS
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



/*
* @ indices show more
*/
var indicesWindow = document.getElementById("indices");
var originalWindowHeight = indicesWindow.style.height;
var buttonMore = document.getElementById("button_more");
var technologiesAll = document.getElementById("technologies_all");
var buttonHide = document.getElementById("button_hide");

buttonMore.addEventListener("click", (evenement)=> {
    
    for(var i=0; i<indices.length; i++) {
        var div = document.createElement("div");
        //div.style.float = "right";
        div.style.display = "block";
        div.style.overflow;
        indicesWindow.style.height = "auto";
        var label = document.createElement("label");
        label.innerHTML = indices[i].toUpperCase();
        div.appendChild(label);
        technologiesAll.appendChild(div);
    }

    buttonMore.style.display = "none";
    buttonHide.style.display= "inline-block";
    
});

buttonHide.addEventListener("click", (evenement)=> {

    var labels = technologiesAll.getElementsByTagName("label");
    for(var i=0; i<labels.length; i++) {
        labels[i].style.display = "none";
        
    }
    indicesWindow.style.height = originalWindowHeight;
    buttonHide.style.display = "none";
    buttonMore.style.display="inline-block";
});


