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
gsap.from(".myskills .card", {
    scrollTrigger:{
        trigger: ".skills",
        start: "top bottom",
        toggleActions: "restart pause none none",
    },
    opacity:0,
    y:300,
    duration:0.5,
    stagger:0.25,

});

gsap.from(".projects .card", {
    scrollTrigger:{
        trigger: ".projects",
        start: "top bottom",
        toggleActions: "restart pause none none",

    },
    opacity:0,
    y:300,
    duration:0.5,
    stagger:0.25,

});