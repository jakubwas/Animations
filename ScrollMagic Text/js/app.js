let controller = new ScrollMagic.Controller();

const paragraps = document.querySelectorAll("p");

const tl = gsap.timeline();

paragraps.forEach((element) => {
    let textFadeOut = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: "onLeave",
        duration: 400,
        offset: -150,
    })
        .setTween(
            gsap.fromTo(
                element,
                0.3,
                { opacity: 1 },
                { opacity: 0, immediateRender: false }
            )
        )
        .addTo(controller);

    let textFadeIn = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: "onEnter",
        duration: 400,
        offset: 50,
    })
        .setTween(
            gsap.fromTo(
                element,
                0.3,
                { opacity: 0, transform: "translateY(40px)" },
                { opacity: 1, transform: "translateY(0px)" }
            )
        )
        .addTo(controller);
});
