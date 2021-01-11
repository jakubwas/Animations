let sceneHasBeenDestroyed = false;
let controller1;
let controller2;
let controller3;
const paths = document.querySelectorAll("path");

function animation() {
    controller1 = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({
        triggerElement: ".row-1",
    });
    scene1
        .setTween(
            gsap.to(".path-row-1", {
                duration: 2,
                ease: "power1.inOut",
                immediateRender: false,
                strokeDashoffset: 0
            })
        )
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller1);

    controller2 = new ScrollMagic.Controller();
    let scene2 = new ScrollMagic.Scene({
        triggerElement: ".row-2",
    });
    scene2
        .setTween(
            gsap.to(".path-row-2", {
                duration: 2,
                ease: "power1.inOut",
                immediateRender: false,
                strokeDashoffset: 0
            })
        )
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller2);

    controller3 = new ScrollMagic.Controller();
    let scene3 = new ScrollMagic.Scene({
        triggerElement: ".row-3",
    });
    scene3
        .setTween(
            gsap.to(".path-row-3", {
                duration: 2,
                ease: "power1.inOut",
                immediateRender: false,
                strokeDashoffset: 0
            })
        )
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller3);
}

window.addEventListener("resize", onWindowResize);

function onWindowResize(e) {
    if (window.innerWidth < 1000 && !sceneHasBeenDestroyed) {
        controller1.destroy(true);
        controller2.destroy(true);
        controller3.destroy(true);
        sceneHasBeenDestroyed = true;
        paths.forEach((path) => {
            path.classList.add("path");
        });
    } else if (window.innerWidth >= 1000 && sceneHasBeenDestroyed) {
        paths.forEach((path) => {
            path.classList.remove("path");
        });
        animation();
        sceneHasBeenDestroyed = false;
    }
}

if (window.innerWidth >= 1000) {
    animation();
} else {
    sceneHasBeenDestroyed = true;
    paths.forEach((path) => {
        path.classList.add("path");
    });
}
