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

$('#show-search-box').click(function(){
  $("#hidden-search-box").toggle();
});

// Mega menu

document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})
