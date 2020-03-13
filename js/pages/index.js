function scrollToSection(id) {
  document
    .getElementById("section_" + id)
    .scrollIntoView({ behavior: "smooth" });
}

// Scroller
$(document).scroll(function() {
  var $nav = $("#section_1");
  if ($(this).scrollTop() > $nav.height()) {
    $("#scroll-top").fadeIn();
  } else {
    $("#scroll-top").fadeOut();
  }
});

$("#scroll-top").click(function() {
  var pos = $("#section_1").offset().top;
  $("html, body").animate({ "scroll-top": pos - 50 }, 1000);
  return false;
});

$(".scroll-down-arrow").click(function() {
  scrollToSection($(this).data("to"));
});

$(function() {
  var $nav = $("#section_1");
  if ($(this).scrollTop() <= $nav.height()) {
    $("#scroll-top").hide();
  }
  hljs.initHighlightingOnLoad();
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('pre code').forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
// hljs.configure({useBR: true});

// document.querySelectorAll('div.code').forEach((block) => {
//   hljs.highlightBlock(block);
// });