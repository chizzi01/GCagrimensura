const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementById('navBar');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbar.classList.toggle('navbarHeight');
  if ($(window).scrollTop() <= 50) {
    $('#navBar').addClass('solid');
    $('#navBar').removeClass('unsolid');
  }
  let navBar = document.getElementById("navBar");

  if (navBar.classList.contains("solid")) {
    inicioBTN.classList.remove("grey");
    nosotrosBTN.classList.remove("grey");
    serviciosBTN.classList.remove("grey");
    ubiBTN.classList.remove("grey");
    linksBTN.classList.remove("grey");
  }

});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('navbarHeight');
});
