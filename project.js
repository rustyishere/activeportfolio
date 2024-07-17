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


gsap.from(".card1",{
    y:50,
    opacity:0,
})
gsap.from(".card2",{
    y:50,
    opacity:0,

})
gsap.from(".card3",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card3",
        scroller:"body",
        scrub:true,
      start:"top 75%",
        end:"top 55%"

    }
})
gsap.from(".card4",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card4",
        scroller:"body",
        scrub:true,
         start:"top 75%",
        end:"top 55%"

    }
})
gsap.from(".card5",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card5",
        scroller:"body",
        scrub:true,
         start:"top 75%",
        end:"top 55%"

    }
})
gsap.from(".card6",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card6",
        scroller:"body",
        scrub:true,
         start:"top 75%",
        end:"top 55%"

    }
})
gsap.from(".card7",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card7",
        scroller:"body",
        scrub:true,
  start:"top 75%",
        end:"top 55%"

    }
})
gsap.from(".card8",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".card8",
        scroller:"body",
        scrub:true,
        start:"top 75%",
        end:"top 55%"

    }
})