// Header Sticky Here

    var headerOne = $(".navbar");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 50) {
        headerOne.removeClass("header-fixed");
      } else {
        headerOne.addClass("header-fixed");
      }
    });
    
 $(window).scroll(function(){

  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

});

// Search Section head

// $('#show-search-box').click(function(){
//   $("#hidden-search-box").toggle();
// });


$('#show-search-box').click(function() {
  $('#hidden-search-box').toggle();
  if ($('#hidden-search-box'))
  {
       $(this).addClass('active');   
  }
  else
  {
       $(this).removeClass('active');   
  }
});



// Mega menu


$('.carousel .carousel-item').each(function(){
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
  next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<minPerSlide;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
});

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

$(function() {
  // Owl Carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      slideSpeed : 200,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      dots: false,
      nav: true,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });
});

$('.owl-one').owlCarousel({
  loop:true,
  margin:0,
  nav: true, 
  dots: false,     
  startPosition: 2,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:1
      }
  }
})
$(window).live('scroll', function() { return false; });



$(document).ready(function() {

  // Gets the video src from the data-src on each button
  
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
    
    
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
    $("#video").attr('https://www.youtube.com/embed/Hg683ZZbipk?controls=0',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
  
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('https://www.youtube.com/embed/Hg683ZZbipk?controls=0',$videoSrc); 
  }) 
  // document ready  
  });

  