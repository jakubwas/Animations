const revealImg = document.querySelector(".reveal-img");
const img = document.querySelector("img");
const revealText = document.querySelector(".reveal-text");

const tl = gsap.timeline();

tl.to(revealImg, { x: "100%", duration: 1 }).to(
    revealText,
    {
        x: "100%",
        duration: 1,
    },
    "-=0.5"
);

let controller = new ScrollMagic.Controller();
const slide = document.querySelector(".container");
let scene = new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.25,
})
    .setTween(tl)
    .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
    })
    .addTo(controller);
