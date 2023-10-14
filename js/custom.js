$(function(){

	$(window).load(function () {
		
		$(".splash").fadeOut(1000,function () {
				
			$(this).remove();
			
		});
	
	});
	
	$(".openMenu").click(function () {
		$("body").addClass("overflowH");
		$(".header").addClass("transform");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose,.menuMobile .menuContent .menuRes li a").click(function () {
		$("body").removeClass("overflowH");
		$(".header").removeClass("transform");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 200) {
			$(".header").addClass("headerFixed");
		} else {
			$(".header").removeClass("headerFixed");
		}
		
	});
	
	/****** Start Tabs ******/
	
	$(".tabsbtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	
	
		$(".selectStyle .textSelect").click(function() {
			$(".selectStyle  .listSelect").slideToggle();
		});
		
		$('body,html').on('click', function (e) {
			var container = $(".selectStyle .textSelect,.selectStyle .textSelect *,.selectStyle  .listSelect"),
				Sub = $(".selectStyle  .listSelect");
	
	
			if (!$(e.target).is(container)) {
				Sub.slideUp();
			}
	
		});
		
		$(".selectStyle  .listSelect ul li").click(function() {
			if($(this).hasClass("checked")) {
				$(this).removeClass("checked");
			} else {
				$(this).addClass("checked").siblings().removeClass("checked");
			}
			
			var id = $(this).parents(".selectStyle").attr("id");
			var val = $("#"+id+ " .listSelect li.checked").attr("val");
			var defVal = $("#"+id+ " .textSelect").attr("defval");
			
			if ($("#"+id+ " .listSelect .checked").length > 0) {
				
				$("#"+id+ " .textSelect").text(val);
				$("#"+id+ " input").val(val);
				
			} else {
				$("#"+id+ " .textSelect").text(defVal);
				$("#"+id+ " input").val("");
			}
			
		});
		
	
        /*
         * -----------------------------------------------------------------
         *-----------------------------Count Down---------------------------
         * -----------------------------------------------------------------
         */
       

        var countDate = $('[data-countdown]');
        countDate.each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate,
                function(event) {
                    $this.html(
                        event.strftime(
                            '<div class="timerDiv"><p class="count-num">%D</p><h5 class="count-date count1">Days</h5></div>' +
                            '<div class="timerDiv"><p class="count-num">%H</p><h5 class="count-date count2">Hours</h5></div>' +
                            '<div class="timerDiv"><p class="count-num">%M</p><h5 class="count-date count3">Minutes</h5></div>'+
                            '<div class="timerDiv"><p class="count-num">%S</p><h5 class="count-date count4">Seconds</h5></div>'));
                });
        });
	
	
	/* WOW Js */
	new WOW().init();
	
	$('.singForm').one('inview', function (event, visible) {
		
		if (visible === true) {
		
			$('.price').countTo();
		
		}
	});
	
	$.scrollIt({topOffset:0});
	
	
	
	
	
	
	
	
	
	
});
