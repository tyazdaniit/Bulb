var $ = document;
var bulbPic = $.getElementById("bulbPic")

function turnOnTheBulb(){
    bulbPic.src = "./pics/bulbon.gif";
}
function turnOffTheBulb(){
    bulbPic.src = "./pics/bulboff.gif";
}