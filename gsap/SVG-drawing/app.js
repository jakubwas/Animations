let controller1 = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({
    triggerElement: ".row-1",
})
    .setTween(
        gsap.to(".path-row-1", {
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
            strokeDashoffset: 0,
            fill: "rgba(152,152,152,0.72)",
        })
    )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller1);

let controller2 = new ScrollMagic.Controller();
let scene2 = new ScrollMagic.Scene({
    triggerElement: ".row-2",
})
    .setTween(
        gsap.to(".path-row-2", {
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
            strokeDashoffset: 0,
            fill: "rgba(152,152,152,0.72)",
        })
    )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller1);

let controller3 = new ScrollMagic.Controller();
let scene3 = new ScrollMagic.Scene({
    triggerElement: ".row-3",
})
    .setTween(
        gsap.to(".path-row-3", {
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
            strokeDashoffset: 0,
            fill: "rgba(152,152,152,0.72)",
        })
    )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller3);

let controller4 = new ScrollMagic.Controller();
let scene4 = new ScrollMagic.Scene({
    triggerElement: ".row-4",
})
    .setTween(
        gsap.to(".path-row-4", {
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
            strokeDashoffset: 0,
            fill: "rgba(152,152,152,0.72)",
        })
    )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller4);
