$(document).ready(function() {

    $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});

  // Custom
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    //used to get width of parent for use with bootsrap 4 grid
    var width = sticky.parent().css("width");
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
        sticky.css("width", width)

    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
        sticky.css("width", width)
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);

    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');


    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});
