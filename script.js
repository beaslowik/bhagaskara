$(document).on("ready", function() {

   /*
    MENU SCROLL TO ELEMENT
    */
   function scrollViewport() {
      $(".scrollElementMenu").on("click",
         function() {
            var myHref = $(this).data("href");
            $("html, body").animate({
               scrollTop: $("#" + myHref).position().top
            }, 1000);
         }
      );
   }

   /*
    OUR SKILLS - PROGRESS BAR
   */
   function setProgressBars() {
      var howManyBars = $(".box_our_skills_bars_all").length;
      var arrayOfValues = [];

      for (var i = 0; i < howManyBars; i++) {
         var progressValue = $(".progress_value").eq(i).text();
         arrayOfValues.push(progressValue);
      }
      for (var i = 0; i < howManyBars; i++) {
         var arrayPercentages = arrayOfValues[i];
         $(".skills_bar_progress").eq(i).css("width", arrayPercentages + "%");
      }
   }
   /*
   STICKY MENU
   */
   function stickyMenu() {
      console.log($(window.innerWidth));


      var menu = $("nav");
      var menuPosition = menu.offset().top;
      $(window).scroll(function() {
         if ($(window).scrollTop() > menuPosition) {
            menu.addClass("sticky");
         } else if ($(window).scrollTop() < menuPosition) {
            menu.removeClass("sticky");
         }
      })
   }

   /*
   PORTFOLIO SELECTION
   */









   scrollViewport();
   setProgressBars();
   stickyMenu();

});
