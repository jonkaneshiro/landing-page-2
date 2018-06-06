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

// Chart JS and Waypoint JS
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Aug '17", "Sep '17", "Oct '17", "Nov '17", "Dec '17", "Jan '18", "Feb '18", "Mar '18", "Apr '18", "May '18", "Jun '18", "Jul '18"],
        datasets: [{
            label: "Weight (lbs)",
            yAxisID: 'A',
            // backgroundColor: 'rgb(87, 210, 235)',
            borderColor: 'rgb(46, 154, 254)',
            data: [198, 200, 203, 205, 203, 199, 197, 190, 186, 185, 183, 183]
        }, {
            label: "Systolic (mmHg)",
            yAxisID: 'B',
            borderColor: 'rgb(232, 62, 62)',
            data: [185, 186, 183, 185, 173, 168, 152, 150, 143, 139, 136, 134]
        }, {
            label: "Diastolic (mmHg)",
            yAxisID: "B",
            borderColor: 'rgb(255, 180, 64)',
            data: [130, 129, 133, 132, 120, 118, 112, 100, 94, 92, 90, 87]
        }]
    },

    // Configuration options go here
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {max: 210,
                fontColor: "rgb(46, 154, 254)"
        }
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 200,
          min: 60,
          fontColor: "rgb(255, 109, 40)"
        }
      }]
    }
  }
});

// HRV Chart JS and Waypoint JS
var ctx2 = document.getElementById('sleep-quality').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["10pm","11pm","12am","1am","2am","3am","4am","5am","6am","7am"],
        datasets: [{
            label: "Sleep Quality",
            type: "line",
            yAxisID: "A",
            data: [30,67,79,83,85,88,68,90,87,40]
        }, {
            label: "Stress",
            yAxisID: 'A',
            backgroundColor: 'rgb(224, 55, 55)',
            // borderColor: 'rgb(43, 187, 67)',
            data: [0,0,0,10,0,0,43,0,0,15] 
        }, {
            label: "Recovery",
            yAxisID: 'A',
            backgroundColor: 'rgb(14, 209, 47)',
            // borderColor: 'rgb(43, 187, 67)',
            data: [30,67,79,80,85,88,0,90,87,40]
        }]
    },

    // Configuration options go here
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {min: 0, max:100},
        stacked: true
      }],
      xAxes: [{
        stacked: true
      }]
    }
  }
});

