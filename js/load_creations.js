/*
* script to list creations within html tag
*/

var loadListCreations = function loadListCreations() {
    var listCreations = document.getElementById("list_creations");
    for(var i=0; i<creations.length; i++) {
        
        var creation = document.createElement("li");  
        creation.innerHTML = creations[i].name;

        var link = document.createElement("a");
        
        link.href = "#" + creations[i].id;

        link.appendChild(creation);
        listCreations.appendChild(link);
    }
}