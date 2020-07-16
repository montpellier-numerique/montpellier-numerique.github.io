var indices = [
    "android, android studio",
    "angular",
    "ajax",
    "apache, apache-tomcat",
    "api",
    "intégration continue",
    "docker !!!",
    "dom",
    "eclypse",
    "fullcalendarjs !!!",
    "git, gitlab, gitlab runner",
    "graddle",
    "hibernate",
    "http",
    "intellij",
    "java, java se, java ee",             
    "javascript",
    "jdbc",
    "jpa",
    "jsp",
    "maven",
    "micro services",
    "mysql",
    "node",
    "npm",
    "primeeng",
    "rest",
    "room",
    "sdk facebook !!!",
    "spring, spring mvc, springboot",
    "sql",
    "sqlite",
    "thymleaf",
    "tomcat",
    "visual studio code",
    "volley",
    "web services"
]

/**
 * BUTTONS
 */

var buttonMainRed = document.getElementById("button_main_red");
var logo = document.getElementById("logo");
buttonMainRed.addEventListener("click", (evenement)=> {
    logo.style.color = "white";
    buttonMainRed.style.color = "white";
});

var buttonMore = document.getElementById("button_more");
buttonMore.addEventListener("click", (evenement)=> {
    buttonMore.style.display="none";
});

