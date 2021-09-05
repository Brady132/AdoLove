(function($) {
	"use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 1) {
           header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });
	




   // onepage nav
   var navclose = $('#onepage-menu');
   if(navclose.length){
       $(".nav-menu li a").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "active-menu"
           });
       }
   }

    
    // scrollTop init	
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    win.on('load', function () {
        //Member Filter Isotop
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        });

        // filter functions
        var filterFns = {
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.button-group').on('click', '.filter-btn', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.filter-btn', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    })
   

})(jQuery);