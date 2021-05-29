// // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar1").style.padding = "30px 10px";
//     document.getElementById("img").style.fontSize = "inherit";
//   } else {
//     document.getElementById("navbar1").style.padding = "80px 10px";
//     document.getElementById("img").style.width = "70%";
//   }
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
$(document).ready(function () {
  $('.nav-button').click(function () {
    $('body').toggleClass('nav-open');
  });
});

const links = document.querySelectorAll(".first-slide_margin a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}