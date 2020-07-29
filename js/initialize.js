/**
 * SET LANGUAGE
 * CALL TRANSLATION TO INITIALIZE
 * LOAD THE LIST OF CREATIONS
 */

languageIndex = fr;

var initialize = function initialize() {
    translateTo(languageIndex);
    loadListCreations();
    loadData();
}
