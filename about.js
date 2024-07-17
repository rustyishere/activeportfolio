Shery.textAnimate(".textcontainer h4" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

var menu = document.querySelector(".menures button");
var navmenu = document.querySelector(".nav2 ul");
var nav1 = document.querySelector(".nav1");
var nav2 = document.querySelector(".nav2");

menu.addEventListener("click",function(){
    nav1.style.display = "none"
    navmenu.style.display = "flex"
    navmenu.style.gap = "3vh"
    navmenu.style.alignItems = "center"
     navmenu.style.listsStyleType = "none"
    navmenu.style.height = "100vh"
    navmenu.style.width = "100vw"
    menu.style.display = "none"
    nav2.style.width = "100vW"
});