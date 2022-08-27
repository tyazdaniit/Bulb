const $ = document;
const bulbPic = $.getElementById("bulbPic");
const turnOn = $.getElementById("turnOn");
const turnOff = $.getElementById("turnOff");

turnOn.addEventListener("click", () => {
  bulbPic.src = "./pics/bulbon.gif";
});

turnOff.addEventListener("click", () => {
  bulbPic.src = "./pics/bulboff.gif";
});
