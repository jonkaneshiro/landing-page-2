function changePeople(){
    var words = [
        "<span style='color: #158CEA !important'>communities</span> to be  healthier and thrive",
        "<span style='color: #158CEA !important'>physicians</span> with connective technology",
        "<span style='color: #158CEA !important'>families</span> to care for their loved ones",
        "<span style='color: #158CEA !important'>patients</span> to take control of their health",
        ], i = 0;
    setInterval(function(){
        $('#people').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 4000);
        
};

$(".logo").fadeIn(2000,function(){})
 
$(".tagline").fadeIn(4000,function(){
    $(".finalTagline").fadeIn(2000)
})

changePeople()

// Anchor fades


// Animation for scrolling effect for table of contents
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Animation for letter-spacing on mission statement
/*jslint browser: true*/
/*global jQuery, window, document*/
// (function ($) {
//     'use strict';
//     var results = {};

//     function display() {
//         var resultString = '';

//         $.each(results, function (key) {
//             resultString += '(' + key + ': ' + Math.round(results[key]) + '%)';
//         });

//         console.log(resultString);
//     }

//     function calculateVisibilityForDiv(div$) {
//         var windowHeight = $(window).height(),
//             docScroll = $(document).scrollTop(),
//             divPosition = div$.offset().top,
//             divHeight = div$.height(),
//             hiddenBefore = docScroll - divPosition,
//             hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

//         if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
//             return 0;
//         } else {
//             var result = 100;

//             if (hiddenBefore > 0) {
//                 result -= (hiddenBefore * 100) / divHeight;
//             }

//             if (hiddenAfter > 0) {
//                 result -= (hiddenAfter * 100) / divHeight;
//             }

//             return result;
//         }
//     }

//     function calculateAndDisplayForAllDivs() {
//         $('div').each(function () {
//             var div$ = $(this);
//             results[div$.attr('id')] = calculateVisibilityForDiv(div$);
//         });

//         display();
//     }

//     $(document).scroll(function () {
//         calculateAndDisplayForAllDivs();
//         if (results.mission !== 100 & results.mission >= 10) {
//           $("#mission-content-1").css("letter-spacing", ((-2/99)*results.mission+(1+200/99)) + "px")
//           $("#mission-content-2").css("letter-spacing", ((-2/99)*results.mission+(1+200/99)) + "px")
//           $("#mission-content-3").css("letter-spacing", ((-2/99)*results.mission+(1+200/99)) + "px") 
//       }

//       });

//     $(document).ready(function () {
//         calculateAndDisplayForAllDivs();
//     });
// }(jQuery));

