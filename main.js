/*jslint browser: true*/
/*global $*/


var target = $('.navbar');
target.after('<div class="affix" id="affix"></div>');

var affix = $('.affix');
affix.append(target.clone(true));

// Show affix on scroll.
var element = document.getElementById('affix');
if (element !== null) {
  var position = target.position();
  window.addEventListener('scroll', function () {
    var height = $(window).scrollTop()
    if (height > position.top) {
      target.css('visibility', 'hidden')
      affix.css('display', 'block')
    } else {
      affix.css('display', 'none')
      target.css('visibility', 'visible')
    }
  })
}
