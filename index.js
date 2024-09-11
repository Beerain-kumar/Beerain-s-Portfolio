let path = "M 10 100 Q 750 100 1420 100"
let finalpath= "M 10 100 Q 750 100 1420 100"

let string = document.querySelector(".string")

string.addEventListener("mousemove" ,function(debt){
    let ypos = Math.min(debt.y,280)
    let path = `M 10 100 Q ${debt.x} ${ypos} 1420 100`
    console.log(path);
    
    gsap.to(".string path",{
        attr:{
            d:path
        },
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to(".string path",{
        attr:{
            d:finalpath
        },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})


gsap.registerPlugin(ScrollTrigger);

// gsap.from("#project1",{
//     x:-1500,
//     duration:0.5,
//     delay:0.5,
//     scrollTrigger:{
//         trigger:"#project1",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 30%",
//         scrub:2,
//     }    
// })

// gsap.from("#project2",{     
//     x:1500,
//     duration:0.5,
//     delay:0.5,
//     scrollTrigger:{
//         trigger:"#project2",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 30%",
//         scrub:2,
//     }    
// })
// gsap.from("#project3",{
//     x:-1500,
//     duration:0.5,
//     delay:0.5,
//     scrollTrigger:{
//         trigger:"#project3",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 30%",
//         scrub:2,
//     }    
// })
// gsap.from("#project4",{
//     x:1500,
//     duration:0.5,
//     delay:0.5,
//     scrollTrigger:{
//         trigger:"#project4",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 30%",
//         scrub:2,
//     }    
// })

let tl = gsap.timeline();

tl.from(".logo-group",{
    y:-100,
    duration:0.3, //0.3 an 0.2
    delay:0.3
})

tl.from(".nav-items div",{
    y:-100,
    duration:0.2,
    stagger:0.3
})

tl.from(".hero-section",{
    scale:0,
    duration:0.3,
})


// gsap.from(".contactus-heading",{    //max-width: 1300px
//     x:-400,
//     duration:0.5,
//     delay:6,
//     scrollTrigger:{
//         trigger:".contactus-heading",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 60%",
//         scrub:2
//     }
// })

// gsap.from(".contactus-sub-heading",{  
//     x:-1500,
//     duration:0.5,
//     delay:6,
//     scrollTrigger:{
//         trigger:".contactus-sub-heading",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 60%",
//         scrub:2
//     }
// })

const mm = gsap.matchMedia();
mm.add("(min-width: 1300px)",()=>{
    gsap.from(".contactus-heading",{    
            x:-400,
            duration:0.5,
            delay:6,
            scrollTrigger:{
                trigger:".contactus-heading",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"top 60%",
                scrub:2
            }
        })
        gsap.from(".contactus-sub-heading",{  
            x:-1500,
            duration:0.5,
            delay:6,
            scrollTrigger:{
                trigger:".contactus-sub-heading",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"top 60%",
                scrub:2
            }
        })
        gsap.from("#project1",{
            x:-1500,
            duration:0.5,
            delay:0.5,
            scrollTrigger:{
                trigger:"#project1",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"top 30%",
                scrub:2,
            }    
        })
        
        gsap.from("#project2",{     
            x:1500,
            duration:0.5,
            delay:0.5,
            scrollTrigger:{
                trigger:"#project2",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"top 30%",
                scrub:2,
            }    
        })
        gsap.from("#project3",{
            x:-1500,
            duration:0.5,
            delay:0.5,
            scrollTrigger:{
                trigger:"#project3",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"top 30%",
                scrub:2,
            }    
        })
        // gsap.from("#project4",{
        //     x:1500,
        //     duration:0.5,
        //     delay:0.5,
        //     scrollTrigger:{
        //         trigger:"#project4",
        //         scroller:"body",
        //         markers:true,
        //         start:"top 70%",
        //         end:"top 30%",
        //         scrub:2,
        //     }    
        // })
        
        
        
    return () =>{
        gsap.killTweensOf(".contactus-heading")
        gsap.killTweensOf(".contactus-sub-heading")
        gsap.killTweensOf("#project1")
        gsap.killTweensOf("#project2")
        gsap.killTweensOf("#project3")
        gsap.killTweensOf("#project4")
    }
})


// function for button read me more

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
