const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y:30,
    opacity:0,
    delay:.4,
    duration:.5,
    ease: Power3
})

Shery.textAnimate(".headings h1", {
    style: 1,
    y: 100,
    delay: 0.1,
    duration: .7,
    multiplier: 0.1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });



gsap.from("#anim2",{
    y:200,
    stagger:.2,
    delay:.2,
    opacity:0,
    ease:Expo,
    duration:2,
})


Shery.imageEffect(".img-text img",{
    style:3,
    config:{"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":14.05,"range":[0,100]},"uFrequencyZ":{"value":20.66,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.37},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect("#imgst img",{
    style:5,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":0.64,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7368452739313667},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

gsap.from(".img-text img",{
    z:-4,
    opacity:0,
    duration:2,
    ease: Expo.easeInOut(),
})

Shery.imageEffect(".fimg",{
    style:5,
    gooey:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9444585663446874},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.78,"range":[1,15]},"durationOut":{"value":1.4,"range":[0.1,5]},"durationIn":{"value":2,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.62,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.36,"range":[0,2]},"noise_scale":{"value":17.36,"range":[0,100]}},
})

document.querySelector(".text").addEventListener("mouseenter", function () {
    gsap.to(".future video",{
        opacity:1,
        duration:.5,
        ease:Power4,
    })
})
document.querySelector(".text").addEventListener("mouseleave", function () {
    gsap.to(".future video",{
        opacity:0,
        duration:.5,
        ease:Power4,
    })
})