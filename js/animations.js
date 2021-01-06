gsap.registerPlugin(ScrollTrigger);
gsap.to(".skills", {
    scrollTrigger: {
        trigger: ".container .img",
        start: "top top",
        markers: true,
        scrub: true,
        toggleActions: "restart play reverse reset"
    },
    backgroundColor: "#fff",
});
gsap.from(".showcase", {
    scrollTrigger: {
        trigger: ".skills",
        start: "bottom center",
        markers: true,
        scrub: true,
        toggleActions: "restart play reverse reset"
    },
    backgroundColor: "#fff",
});
gsap.to(".showcase h1", {
    scrollTrigger: {
        trigger: ".skills",
        start: "bottom center",
        markers: true,
        scrub: true,
        toggleActions: "restart play reverse reset"
    },
    color: "#fff",
    textDecoration: "none",
});