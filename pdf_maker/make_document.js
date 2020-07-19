/**
 * 
 * jsPdf CDN Library
 *
 * default export is a4 paper, portrait, using millimeters for units
 * 
 * source https://github.com/MrRio/jsPDF
 * 
 * 
 * if I need:
 * import node modules into the project: npm install jspdf --save
 * then sudo npm install -g npm
 * 
 * to load to html this way <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script> remains necessary
 */

 var doc = new jsPDF(
     {
         orientation: "portrait",
         unit: "cm",
         format: "a4"
     }
 );

 var visitCard = document.getElementById("visit_card"); 

 doc.text(3, 3, "hello" + visitCard); // coordinates x y
 
 doc.save("two_by_four.pdf");