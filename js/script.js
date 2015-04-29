jQuery(function($){
        $(".tel-mask").mask("+7 (999) 999-9999");
    });

$( document ).ready(function() {


    $(".full-prof").click(function () {
        $(".full-form").slideToggle("slow");
    });

	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});

    $('.get-call').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#call').fadeIn(400);
    });

    $('.ask-question').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#ask').fadeIn(400);
    });

    $('.priv-link').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#privacy').fadeIn(400);
    });

     $('.insurance').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#insurance').fadeIn(400);
    });

     $('.record').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#record').fadeIn(400);
    });


    $('.close').click(function(){
    	$('.modal').fadeOut(400);
    	$('.form-mask').fadeOut(400);
    })
    $('.form-mask').click(function(){
    	$('.modal').fadeOut(400);
    	$(this).fadeOut(400);
    })

      $(document).keyup(function(d) {
            if (d.keyCode == 27) {
                $('.form-mask').fadeOut(400);
                $('.modal').fadeOut(400);
            }
        });





    $('.attach').click(function(){
      $('.choice-btn').slideToggle("medium");
    });
    $('.fill-link').click(function(){
      $('.fill-data').slideToggle("medium");
    })


    $(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 140) $("nav").css({ position: 'relative'});
        else $("nav").css({position: 'fixed'});
    });
});


     $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-55
      }, 1200);
      e.preventDefault();
   });


   return false;


});


           
