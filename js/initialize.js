// initialize
var defaultLanguageIndex = en;

var setLanguage = function setLanguage(languageIndex) {
    translateTo(languageIndex);
    resetButtonsFlags();
};

var initialize = function initialize() {
    setLanguage(defaultLanguageIndex);
}
