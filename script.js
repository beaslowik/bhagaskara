$(document).on("ready", function () {

    //==ANIMACJA PO KLIKNIECIU W IKONĘ NA JUMBOTRONIE
    $(".box_jumbotron_icons_icons").on("click",
        function () {
            var myHref = $(this).data("href");
            $("html, body").animate({scrollTop: $("#" + myHref).position().top}, 1000);
        }
    );

    //==ANIMACJA PO KLIKNIECIU W BUTTON W MENU
    $(".menu_button").on("click",
        function () {
            var myHref = $(this).data("href");
            $("html, body").animate({scrollTop: $("#" + myHref).position().top}, 1000);
        }
    );


    //== OUR SKILLS - PROGRESS BAR


    $("document").ready(
        function () {
            var howManyBars = $(".box_our_skills_bars_all").length;
            var arrayOfValues = [];

            for (var i = 0; i < howManyBars; i++) {
                var progressValue = $(".progress_value").eq(i).text();
                arrayOfValues.push(progressValue);
            }
            for(var i = 0; i < howManyBars ; i++){
                var arrayPercentages = arrayOfValues[i];

                $(".skills_bar_progress").eq(i).css("width", arrayPercentages+"%");
            }
        });














});