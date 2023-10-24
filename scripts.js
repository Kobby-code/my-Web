document.addEventListener('DOMContentLoaded', function () {
    const text = "Hello there, I'm Elvis Yeboah Marfo";
    const textElement = document.getElementById('intro');
  
    function typeText(text, index) {
      textElement.textContent = text.slice(0, index);
  
      if (index < text.length) {
        setTimeout(function () {
          typeText(text, index + 1);
        }, 100); // Adjust the typing speed by changing the timeout value
      }
    }
  
    typeText(text, 0);
  });

// JavaScript to change the navbar color on scroll
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".topnav");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function myFunction() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }