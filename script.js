var mainBoday = document.querySelector("body")
var myBox = document.querySelector(".box")

mainBoday.addEventListener("mousemove", function(dets){
    gsap.to(myBox,{
        left: dets.x - 50,
        top: dets.y - 50
    });
});