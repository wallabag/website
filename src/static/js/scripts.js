$(document).ready(function() {

  /***************** Waypoints ******************/
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeIn');
  }, {
    offset: '100%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeIn');
  }, {
    offset: '90%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeIn');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeIn');
  }, {
    offset: '85%'
  });

  /***************** Flickity ******************/
  // $('#featuresSlider').flickity({
  //   cellAlign: 'left',
  //   contain: true,
  //   prevNextButtons: false
  // });

  $('#showcaseSlider').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    imagesLoaded: true
  });

  /***************** Fancybox ******************/
  $(".youtube-media").on("click", function() {
    if ($(window).width() <= 768) {
      return;
    }
    $.fancybox({
      href: this.href,
      padding: 4,
      type: "iframe",
    });
    return false;
  });

  // $("a.single_image").fancybox({
  //   padding: 4,
  // });

  /***************** Nav Transformicon ******************/
  /* When user clicks the Icon */
  $(".nav-toggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay-boxify").toggleClass("open");
  });

  /* When user clicks a link */
  $(".overlay ul li a").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open");
  });

  /* When user clicks outside */
  $(".overlay").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open");
  });

  /***************** Smooth Scrolling ******************/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + target.slice(1) + ']');
      if (target.length) {
        window.scrollTo({ top: target.offset().top, behavior: 'smooth' });
        return false;
      }
    }
  });

});
