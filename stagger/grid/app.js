const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.from(".box", {
    duration: 3,
    scale: 0.1,
    opacity: 0.3,
    y: 40,
    ease: "power1.inOut",
    stagger: {
        grid: [11, 15],
        from: "center",
        amount: 3,
    },
});
