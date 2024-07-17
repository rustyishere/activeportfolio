gsap.from(".pcon1",{
    y:50,
    opacity:0,
    delay:0.7
})

gsap.from(".p2con1_1",{
    y:50,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".p2con1_1",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:"true",
    }
})

gsap.from(".p2con1_2",{
    y:50,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".p2con1_2",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:"true",
    }
})
gsap.from(".text1",{
    y:50,
    opacity:0,
    scale:0.9,

    scrollTrigger:{
        trigger:".text1",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:"true",
    }
})
gsap.from(".text2",{
    y:50,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".text2",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:"true",
    }
})
gsap.from(".imgadd",{
    y:50,
    scale:0.9,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".imgadd",
        scrub:true,
        start:"top 90%",
        end:"top 70%",

    }
})

gsap.from(".contact-container",{
    y:100,

    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact-container",
        scrub:true,
        start:"top 90%",
        end:"top 70%",
    }
})

gsap.from(".p4rightimg",{
    y:50,
    scale:0.9,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".p4rightimg",
        scrub:true,
        start:"top 90%",
        end:"top 70%",

    }
})

gsap.from(".textleft",{
    y:50,
    scale:0.9,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".textleft",
        scrub:true,
        start:"top 90%",
        end:"top 70%",

    }
})

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
