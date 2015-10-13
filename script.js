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
   $("#bt_all").on("click", function() {
      $(".portfolio_images").removeClass("hide");
      $(".portfolio_images").addClass("inline_block");
   });
   $("#bt_web").on("click", function() {
      $(".portfolio_images").removeClass("inline_block");
      $(".portfolio_images").addClass("hide");
      $("[data-web]").removeClass("hide");
      $("[data-web]").addClass("inline_block");
   });
   $("#bt_apps").on("click", function() {
      $(".portfolio_images").removeClass("inline_block");
      $(".portfolio_images").addClass("hide");
      $("[data-apps]").removeClass("hide");
      $("[data-apps]").addClass("inline_block");
   });
   $("#bt_icons").on("click", function() {
      $(".portfolio_images").removeClass("inline_block");
      $(".portfolio_images").addClass("hide");
      $("[data-icons]").removeClass("hide");
      $("[data-icons]").addClass("inline_block");
   });

   /*
   OUR TEAM
   */
   var arrow_left = $("#arrow_left");
   var arrow_right = $("#arrow_right");

   arrow_right.on("click",
      function() {
         var first_shown_person = $(".show_person").first();
         var right_hidden_person = $(".show_person").last().next(".hide_person");
         if (right_hidden_person.length == 0) {
            return 0;
         }
         first_shown_person.removeClass("show_person").addClass("hide_person");
         right_hidden_person.removeClass("hide_person").addClass("show_person");
      });
   arrow_left.on("click",
      function() {
         var last_shown_person = $(".show_person").last();
         var left_hidden_person = $(".show_person").first().prev(".hide_person");
         if (left_hidden_person.length == 0) {
            return 0;
         }
         last_shown_person.removeClass("show_person").addClass("hide_person");
         left_hidden_person.removeClass("hide_person").addClass("show_person");
      });

   scrollViewport();
   setProgressBars();
   stickyMenu();

});
