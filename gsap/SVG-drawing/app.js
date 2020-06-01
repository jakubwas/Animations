let path = document.querySelector(".path");
let length = path.getTotalLength();
console.log(length);

let controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    triggerElement: ".svg",
})
    .setTween(
        gsap.to(".path", {
            duration: 3,
            ease: "power1.inOut",
            immediateRender: false,
            strokeDashoffset: 0,
            fill: "rgba(152,152,152,0.72)",
        })
    )
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
