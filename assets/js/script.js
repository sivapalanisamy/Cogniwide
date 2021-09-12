$( document ).ready(function() {
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $(".testimonials-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });

    $(".client-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 2.5,
        },
        600: {
          items: 2.5,
        },
        1000: {
          items: 5,
        },
      },
    });

    
    //Aos Animate
    AOS.init();

    var stop = $(".project-count").offset().top;
     function animateValue(obj, start, end, duration) {
       let startTimestamp = null;
       const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         obj.innerHTML = Math.floor(progress * (end - start) + start);
         if (progress < 1) {
           window.requestAnimationFrame(step);
         }
       };
       window.requestAnimationFrame(step);
     }
    $(window).scroll(function() {
        console.log("stop:" + (stop - 500));
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > stop - 500) {
          console.log("here");
          $(window).off("scroll");
          const obj = document.getElementById("application");
          animateValue(obj, 0, 100, 1500);
          const obj1 = document.getElementById("product");
          animateValue(obj1, 0, 15, 1000);
          const obj2 = document.getElementById("lines");
          animateValue(obj2, 0, 5, 500);
          const obj3 = document.getElementById("consumer");
          animateValue(obj3, 0, 20, 1000);
        }
    });


   

    

});