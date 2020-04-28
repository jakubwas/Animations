gsap.from(".box", {
    duration: 3,
    scale: 0.2,
    opacity: 0,
    rotate: 720,
    x: gsap.utils.wrap([-200, 200]),
    y: gsap.utils.wrap([-100, 100]),
    ease: "power2.out",
    stagger: {
        amount: 3,
    },
});
