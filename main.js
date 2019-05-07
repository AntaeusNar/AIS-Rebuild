/*jslint browser: true*/
/*global $, window*/
$("#mainmenu").css("border", "3px solid red");

// Get the navbar
var navbar = $("#mainmenu");
console.log(navbar.id)

// Get the offset position of the navbar
var sticky = $("#mainmenu").offsetTop;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky");
  }
}


window.onload = function() {


    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
};
