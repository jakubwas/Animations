gsap.from(".box", {
    duration: 4,
    scale: 0.3,
    opacity: 0,
    y: gsap.utils.wrap([200, -200]),
    ease: Elastic.easeOut,

    stagger: {
        from: "center",
        amount: 0.25,
    },
});
