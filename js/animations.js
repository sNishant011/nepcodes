gsap.registerPlugin(ScrollTrigger);
gsap.to(".skills", {
    scrollTrigger: {
        trigger: ".container .img",
        start: "top top",
        toggleActions: "restart play reverse reset"
    },
    backgroundColor: "#fff",
    duration:1,
});
gsap.from(".showcase", {
    scrollTrigger: {
        trigger: ".showcase",
        start: "top center",
        toggleActions: "restart play reverse reset"
    },
    backgroundColor: "#fff",
    druation:1,
});