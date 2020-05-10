gsap.from(".box", {
    duration: 3,
    opacity: 0,
    scale: 0.3,
    x: gsap.utils.wrap([-100, 100]),
    y: gsap.utils.wrap([-50, 50]),
    ease: "power2.out",
    stagger: {
        amount: 3,
    },
});
