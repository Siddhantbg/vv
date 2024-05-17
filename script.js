// function playScrollSound() {
//     var audio = document.getElementById('scrollSound');
//     audio.play();
//   }

//   // Add scroll event listener to play sound
//   window.addEventListener('scroll', playScrollSound);
    // Scroll Animation
    gsap.to("#bg", {
        scrollTrigger: {
            scrub: 1
        }, 
        scale: 1.5
    });

    gsap.to("#spidy", {
        scrollTrigger: {
            scrub: 1.5
        }, 
        scale: 1.5
    }); 

    gsap.to("#logo", {
        scrollTrigger: {
            scrub: 1
        }, 
        y: 500
    }); 

    gsap.from("#toggle", {
        scrollTrigger:  {
            scrub: 1
        }, 
        x: -30
    });
    
    gsap.to("#ironman", {
        scrollTrigger: {
            scrub: 1
        },
            y: 1500,
            x: 200,
            scale: 3
        })
    
    // Row-1 Animation
    gsap.to(".anim1", {
        scrollTrigger: {
            scrub: 1,
            duration: 1
        },
        x: 30
    })

    // Row-2 Animation
    gsap.to("#gif2",{
        scrollTrigger: {
            scrub: 1.5
        },
        x: 80
    })

    gsap.from(".anim2", {
        scrollTrigger: {
            scrub: 1.5,
            duration: 1
        },
        x: 80
    })

    // Row-3 Animation
    gsap.to(".anim3", {
        scrollTrigger: {
            scrub: 1.5,
            duration: 1
        },
        x: 30
    })

    gsap.from("#gif3",{
        scrollTrigger: {
            scrub: 1.5
        },
        x: 30
    })

    // Row-4 Animation
    gsap.to("#gif4",{
        scrollTrigger: {
            scrub: 1
        },
        x: 50
    })

    gsap.from(".anim4", {
        scrollTrigger: {
            scrub: 1.5,
            duration: 1
        },
        x: 100
    })