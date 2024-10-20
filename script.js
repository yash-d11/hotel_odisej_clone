function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
init()
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function page1(){
  gsap.from("#page1 img",{
    width:"50%",
    height:"50%",
    borderRadius:"10px",
    x:400,
    y:200,
    duration:0.6,
    delay:2.2
})
gsap.from("#page1 svg",{
    y:-50,
    duration:1,
    delay:1.5,
    opacity:0
})
gsap.from("#nav",{
    y:-200,
    duration:1,
    delay:2.8
    
})
}
page1();
// var line = document.querySelector("#nav-prt1");
// var flag = true

// line.addEventListener("click",function(){
    
//     if(flag==true){
//         flag=false
//     document.querySelector("#line1").style.rotate = "-45deg";
//     document.querySelector("#line1").style.margin = "-3.5px";
//     document.querySelector("#line2").style.opacity = 0;
//     document.querySelector("#line3").style.rotate = "45deg";
//     document.querySelector("#line3").style.margin = "-3.5px" 
    
//     }
//     else{
//         flag=true
//         document.querySelector("#line1").style.rotate = "0deg";
//         document.querySelector("#line1").style.margin = "3px";
//         document.querySelector("#line2").style.opacity = 1;
//         document.querySelector("#line3").style.rotate = "0deg";
//         document.querySelector("#line3").style.margin = "3px";
        
//     }
// })
(function(){
  var h2Data = document.querySelectorAll("#page2 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span", {
    color: "#e3e3c4",
    stagger: 0.2,
    // opacity:0,
    scrollTrigger: {
      trigger: "#page2 h2 span",
      scroller: "#main",
      // markers: true,
      start: "top 60%",
      end: "top -30%",
      scrub: 2,
      
    }
  });
  gsap.to("#page2 #svg2,#page2 #svg3", {
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page2 #svg2",
      scroller: "#main",
      scrub: 2,
    },
  });
})();
  function page3(){
    
  var page3h2 = document.querySelectorAll("#page3 h2");
  page3h2.forEach(function (elem) {
    var text = elem.textContent;
    var splited = text.split("");
    var clut = "";
    splited.forEach(function (e) {
      clut += `<span>${e}</span>`;
    });
    elem.innerHTML = clut;
  });
  gsap.to("#page3 h2 span", {
    color: "#434B34",
    stagger: 0.2,
    
    scrollTrigger: {
      trigger: "#page3 h2 span",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
      
    }
  });
  
  var tl2 = gsap.timeline({
    stagger:1,
  scrollTrigger: {
    trigger: "#page3-left",
    scroller: "#main",
    
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
tl2.from("#page3-left",{
  opacity:0,
  y:100,
  duration:1

})
tl2.from("#page3-img2",{
  opacity:0,
  duration:1,
  y:100
})
tl2.from("#page3-img3",{
  opacity:0,
  duration:1,
  y:100
})

  
  }
  page3()
  
  var h2Dat = document.querySelectorAll("#page6 h2");
  h2Dat.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page6 h2 span", {
    color: "#e3e3c4",
    stagger: 0.2,
    // opacity:0,
    scrollTrigger: {
      trigger: "#page6 h2 span",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
      scrub: 3,
      
    }
    
  });
  var t3 = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#page6 p",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 50%",
      scrub: 3,
      
    }
  })
  t3.from("#page6 p",{
    opacity:0,
    y:100,
    duration:2,

  })
  t3.from("#page6 #page6_img",{
    opacity:0,
    y:100,
    duration:2,
  })
  gsap.from("#page6 #footr",{
    opacity:0,
    y:100,
    duration:2,
    scrollTrigger: {
      trigger: "#page6 #footr",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 75%",
      scrub: 3,
      
    }
  })
  gsap.to("#page6 #svg4,#page6 #svg5", {
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page6 #svg5",
      scroller: "#main",
      scrub: 2,
    },
  });
  gsap.to("#page6 #svg6,#page6 #svg7", {
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page6 #svg7",
      scroller: "#main",
      scrub: 2,
    },
  });
  var h2Data7 = document.querySelectorAll("#page7 h2");
  h2Data7.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  
  gsap.to("#page7 h2 span", {
      color: "#485038",
      stagger: 0.2,
      // opacity:0,
      scrollTrigger: {
        trigger: "#page7 h2 span",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top -30%",
        scrub: 2,
        
      }
    });
