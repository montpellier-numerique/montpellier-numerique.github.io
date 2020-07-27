/**
 * SET LANGUAGE TO INITIALIZE
 */

languageIndex = en;

var setLanguage = function setLanguage(languageIndex) {
    translateTo(languageIndex);
    resetButtonsFlags();
};


var initialize = function initialize() {
    setLanguage(languageIndex);
    
}
