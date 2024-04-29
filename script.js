function page1Animation(){
    
var tl= gsap.timeline()

tl.from("#page1",{
   opacity:0,
   duration:0.3,
   delay:0.2
})
tl.from("#page1",{
    duration:2.5,
    transform:"scaleX(-0.7) ",
    borderRadius:"50px",
    ease:"expo.out"
})
tl.from("nav",{
    opacity:0,
    duration:1,
    stagger:0.2,
    delay:0.2
 })
tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0, 
    duration:0.5,
    stagger:0.2
 })
}
function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        var tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "20vh"
        })
        tl.to("nav h5", {
            display: "block",
            x: 30,
            stagger: {
                amount: 1
            },
            // y:-10,
            duration: 0.7
        })
        tl.to("nav h5 span", {
            // x:20,
            duration: 1,
            stagger: {
                amount: 1
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        var tl = gsap.timeline()

        tl.to("nav h5 span", {
            // x:-5,
            duration: 0.3,
            stagger: {
                amount: 0.1
            }
        })
        tl.to("nav h5", {
            display: "none",
            duration: 0,
            x: 0,
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.10
        })
    })
}

function page2Animation() {
    var element = document.querySelectorAll(".right-elem");

    element.forEach(function (elems) {
        elems.addEventListener("mouseenter", function () {
            gsap.to(elems.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elems.addEventListener("mouseleave", function () {
            gsap.to(elems.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elems.addEventListener("mousemove", function (dets) {
            gsap.to(elems.childNodes[3], {
                x: dets.x - elems.getBoundingClientRect().x - 50,
                y: dets.y - elems.getBoundingClientRect().y - 130
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1.2)",
            opacity: 1,
            borderRadius: 0
        })
        video.addEventListener("click", function () {
            video.pause()
            gsap.to(video, {
                transform: "scaleX(0.7) scaleY(0)",
                opacity: 0,
                borderRadius: "30px"
            })
        })
    })
}

function page4Animation() {
    var sections = document.querySelectorAll(".section-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function page6Animation(){
    gsap.from("#page6-bottom h4",{
        x:10,
        duration:1,
        scrollTrigger:{
            trigger:"#page6-bottom",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}

// page1Animation();

// navAnimation();

page2Animation();

page3VideoAnimation();

page4Animation();

page6Animation();