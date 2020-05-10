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
    .to(".box2", {
        borderLeft: "2px solid rgba(255, 255,255, 0)",
        borderBottom: "1px solid rgba(255, 255,255, 0)",
        duration: 1.5,
        ease: "none",
    })
    .to(
        ".box4",
        {
            borderTop: "2px solid rgba(255, 255,255, 0)",
            borderLeft: "1px solid rgba(255, 255,255, 0)",
            duration: 1.5,
            ease: "none",
        },
        "border"
    )
    .to(
        ".box5",
        {
            borderBottom: "2px solid rgba(255, 255,255, 0)",
            borderRight: "1px solid rgba(255, 255,255, 0)",
            duration: 1.5,
            ease: "none",
        },
        "border"
    )
    .to(".box2, .box4, .box5", { opacity: 0 })
    .addLabel("colors")
    .to(
        ".box1",
        { backgroundColor: "#086972", duration: 5, delay: 1 },
        "border"
    )
    .to(
        ".box3",
        { backgroundColor: "#071a52", duration: 5, delay: 1 },
        "border"
    )
    .to(
        ".box6",
        { backgroundColor: "#17b978", duration: 5, delay: 1 },
        "border"
    )
    .to(".box", { scale: 0.1, opacity: 0, duration: 4, delay: 1 });
