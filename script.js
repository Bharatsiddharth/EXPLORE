let tl = gsap.timeline();
tl.from(".page1 " ,{
    opacity: 0,
    duration: 1,
})
// tl.from(".upper , p, button" ,{
//     opacity: 0,
//     duration: 2,
//     stagger:1
// })
tl.from(".upper ,.h1" ,{
    opacity: 0,
    duration: 1,
    stagger:1
})
tl.from(".upper .p1" ,{
    opacity: 0,
    duration: 1,
})
tl.from(".upper button" ,{
    opacity: 0,
    duration: 2,
})

tl.from(".card" ,{
    x:-1000,
    opacity: 0,
    duration: 1,
})

tl.from(".card2" ,{
    y:1000,
    opacity: 0,
    duration: 1,
})

tl.from(".card3" ,{
    y:1000,
    opacity: 0,
    duration: 1,
})
tl.from(".card4" ,{
    x:1000,
    opacity: 0,
    duration: 1,
})

//                      page - 2

tl.from(".page2", {
    scrollTrigger: {
        trigger:".page2 ,.left ,.h11,.h33, .line , .p22",
        scroller: "body",
        // markers:true,
        start: "30% 60%",
        end: "30% 40%",
        scrub:3,
    }
})


tl.from(".page2 ,.left ,.h11,.h33, .line , .p22" ,{
    y:-10,
    opacity: 0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
        trigger:".page2 ,.left ,.h11,.h33, .line , .p22",
        scroller: "body",
        // markers:true,
        start: "30% 60%",
        end: "30% 40%",
        scrub:3,
        // pin:true 
    }
    
})

tl.from(".right , .img22"  ,{
    // y:-10,
    transform: "translate scale(4)",
    opacity: 0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
        trigger:".right ,.img22",
        scroller: "body",
        // markers:true,
        start: "30% 30%",
        end: "30% 30%",
        scrub:3,
        // pin:true
        
    }
})

//                       page - 3


tl.from(".page3"  ,{
    y:50,
    opacity: 0,
    duration: 1,
    stagger:1,
    scale: (2),
    scrollTrigger: {
        trigger:".page3",
        scroller: "body",
        // markers:true,
        start: "0 30%",
        end: "0 30%",
        scrub:3,
        pin:true
        
    }
})


tl.from(".h111 ,.btn111"  ,{
    y:-50,
    opacity: 0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
        trigger:".h111, .btn111",
        scroller: "body",
        // markers:true,
        start: "200% 20%",
        end: "200% 20%",
        scrub:3,
        pin:true
        
    }
})