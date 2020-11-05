// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("nav__link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// add class to nav-links
function topnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}

// sidebar-style
function openNav() {
  document.getElementById("nav-menu").style.width = "18em";
}

function closeNav() {
  document.getElementById("nav-menu").style.width = "0";
}
