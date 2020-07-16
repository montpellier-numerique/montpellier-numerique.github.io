/**
 * STRINGS EXTERNALISATION FOR TRANSLATIONS
 * Array[0] for French
 * Array[1] for English
 */

var string = {

    mainRedText: ["Développeuse JAVA Full Stack", "Full Stack JAVA Developer"],
    
    // NAV
    skills: ["compétences", "skills"],
    profile: ["profil", "profile"],
    contact: ["contact", "contact"],
    creations: ["créations", "creations"],
    indices: ["indices", "indices"],

    // SKILLS
    skill1: ["crée des applications web & mobile", "creates web & mobile applications"],
    skill2: ["sites web, bases de données", "websites, databases"],
    skill3: ["interfaces simples, agiles, esthétiques", "simple, agile, aesthetic interfaces"]
}

// NAV ELEMENTS
var navSkills = document.getElementById("nav_skills");
var navProfile = document.getElementById("nav_profile");
var navContact = document.getElementById("nav_contact");
var navCreations = document.getElementById("nav_creations");
var navIndices = document.getElementById("nav_indices");

// SKILLS ELEMENTS
var skill1 = document.getElementById("skill_1");
var skill2 = document.getElementById("skill_2");
var skill3 = document.getElementById("skill_3");

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

/**
 * Translation functions
 */
var buttonSpeak = document.getElementById("button_speak");
var buttonSpeakFrench = document.getElementById("button_speak_french");

// to English
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

// to French
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

    // buttons behavior
    buttonSpeakFrench.style.display = "none";
    buttonSpeak.style.display = "block";
});

var buttonMore = document.getElementById("button_more");
buttonMore.addEventListener("click", (evenement)=> {
    buttonMore.style.backgroundColor ="green";
});

