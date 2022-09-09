let anitkabir = document.querySelector(".section1 .pytext")
let ataturk= document.querySelector(".section2 .ata")
let sunref1=document.querySelector(".section1 .sunref1")
let sunref2=document.querySelector(".section1 .sunref2")
let cloud1=document.querySelector(".section1 .cloud1")
let cloud2=document.querySelector(".section1 .cloud2")
let at=document.querySelector(".section2 .at")
let move=0;

window.addEventListener("scroll",function() {
    var y = window.scrollY;
    anitkabir.style.marginTop= y * 0.5 +"px";
    cloud1.style.marginRight= y * 1.5 +"px";
    cloud2.style.marginLeft= y * 1.0 +"px";
    sunref1.style.marginLeft= y * 0.2 +"px";
    sunref1.style.marginTop= y * 0.2 +"px";

    sunref2.style.left = ((213 - y * 0.5) < 0 || (184 - y * 0.5) < 0 ?  213 : (213 - y * 0.5)) + "px"
    sunref2.style.top = ((213 - y * 0.5) < 0 || (184 - y * 0.5) < 0 ?  213 : (184 - y * 0.5)) + "px"

    ataturk.style.marginTop= y * 0.5 +"px";
    at.style.marginRight =y * 1.5 +"px";
    cloud2.style.marginLeft= y * 1.0 +"px";
})
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 9000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
