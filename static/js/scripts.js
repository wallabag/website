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
  function setOverlay(open) {
    $(".nav-toggle")
      .toggleClass("active", open)
      .attr("aria-expanded", open ? "true" : "false");
    $(".overlay-boxify")
      .toggleClass("open", open)
      .attr("aria-hidden", open ? "false" : "true");
  }

  /* When user clicks the Icon */
  $(".nav-toggle").click(function(event) {
    event.preventDefault();
    setOverlay(!$(".overlay-boxify").hasClass("open"));
  });

  /* When user clicks a link */
  $(".overlay ul li a").click(function(event) {
    event.stopPropagation();
    setOverlay(false);
  });

  /* When user clicks outside */
  $(".overlay").click(function(event) {
    if (event.target === this) {
      setOverlay(false);
    }
  });

  $(document).keyup(function(event) {
    if (event.key === "Escape") {
      setOverlay(false);
    }
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
