const delay = 0;

const tm = gsap.timeline({ repeat: -1, yoyo: true });
tm.fromTo(
    ".box1",
    {
        opacity: 0,
    },
    {
        opacity: 1,
        y: 100,
        x: -100,
        duration: 2,
        ease: "sine.in",
    }
)
    .fromTo(
        ".box2",
        {
            opacity: 0,
        },
        {
            opacity: 1,
            y: -100,
            x: 100,
            duration: 2,
            ease: "sine.in",
        },
        "-=2"
    )
    .addLabel("side")
    .from(".box3", {
        opacity: 0,
        duration: 2,
        delay: delay,
    })
    .to(
        ".box3",
        {
            skewX: -50,
            y: -100,
            scaleY: 0.5,
            duration: 2,
            delay: delay,
        },
        "side"
    )
    .from(
        ".box4",
        {
            opacity: 0,
            duration: 2,
            delay: delay,
        },
        "side"
    )
    .to(
        ".box4",
        {
            skewX: -50,
            y: 100,
            scaleY: 0.5,
            duration: 2,
            delay: delay,
        },
        "side"
    )
    .to(".box5", {
        skewY: -40,
        scaleX: 0.6,
        x: -100,
    })
    .to(".box6", {
        skewY: -40,
        scaleX: 0.6,
        x: 100,
    })
    .to(".box2", { x: "-=41", y: "+=50", duration: 2 })
    .to(".box1", { x: "+=41", y: "-=50", duration: 2 }, "-=2")
    .addLabel("border")
    
