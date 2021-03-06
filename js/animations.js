gsap.registerPlugin(ScrollTrigger);
gsap.to(".section",3, {
    width: "0px",
    ease: Expo.easeInOut,
});

gsap.to("#hire-me",{
    scrollTrigger:{
        trigger: ".messagesection",
        start: "top top",
        toggleActions: "restart play reverse reset"
    },
    color: "#005DFF",
    duration:1,
});
gsap.to(".skills", {
    scrollTrigger: {
        trigger: ".container .img",
        start: "top center",
        toggleActions: "restart play reverse reset"
    },
    backgroundColor: "#fff",
    duration:1,
});
gsap.from(".showcase", {
    scrollTrigger: {
        trigger: ".showcase",
        start: "top center",
        toggleActions: "restart play none reset"
    },
    color: "#000",
    backgroundColor: "#fff",
    druation:1,
});
gsap.to(".showcase h1", {
    scrollTrigger: {
        trigger: ".showcase",
        start: "top center",
        toggleActions: "restart play none reset"
    },
    color: "#fff",
    druation:1,
});
gsap.from(".myskills .card", {
    scrollTrigger:{
        trigger: ".skills",
        start: "top bottom",
        toggleActions: "restart none none none",
    },
    opacity:0,
    y:300,
    duration:0.5,
    stagger:0.25,

});


var gallerytl = gsap.timeline({
    scrollTrigger: {
        trigger: ".companies",
        start: "top center",
        triggerHook: 0,
        toggleActions: "restart play reverse reset"

    }
});

gallerytl.from("#envisionerl", {
    scale: 0.3,
    autoAlpha: 0,
    ease: "slow",
    duration: 1,
})
var insertpos = gallerytl.duration();
gallerytl.from("#snphotosl", {
    scale: 0.3,
    autoAlpha: 0,
    ease: "slow",
    duration: 1,
    visibility: "visible",
    x: "-15vw",
    y: "-10vh",
}, (insertpos -= 1.5))
insertpos += 0.4;
gallerytl.from("#nepcodel", {
    scale: 0.3,
    autoAlpha: 0,
    ease: "slow",
    duration: 1,
    visibility: "visible",
    x: "80vw",
    y: "-10vh",
}, (insertpos -= 0.2))
insertpos += 0.4;
gallerytl.from("#ebakeryl", {
    scale: 0.3,
    autoAlpha: 0,
    ease: "slow",
    duration: 1,
    visibility: "visible",
    y: "60vh",
}, (insertpos -= 0.5))
insertpos += 0.4;
