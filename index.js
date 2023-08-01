let words = document.getElementsByClassName('word');
for (let i = 0; i < words.length; i++) {
  setTimeout(() => {
    words[i].style.opacity = "1";
  }, 1000 * i);
}

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('#navBar').addClass('solid');
    $('#navBar').removeClass('unsolid');
    $('#inicioBTN').removeClass('grey');
    $('#nosotrosBTN').removeClass('grey');
    $('#serviciosBTN').removeClass('grey');
    $('#ubiBTN').removeClass('grey');

  } else {
    $('#navBar').removeClass('solid');
    $('#navBar').addClass('unsolid');
    $('#inicioBTN').addClass('grey');
    $('#nosotrosBTN').addClass('grey');
    $('#serviciosBTN').addClass('grey');
    $('#ubiBTN').addClass('grey');

  }
});


let mybutton = document.getElementById("wppIcon");
mybutton.style.display = "none";

function observer2(targetId) {
  const texto = document.getElementById(targetId);

  const callback = (entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        mybutton.style.display = "none";
      } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      }
    });
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2
  });

  observer.observe(texto);
}

observer2("myFooter");

window.onscroll = function() {
  if (document.body.scrollTop <= 20 && document.documentElement.scrollTop <= 20) {
    mybutton.style.display = "none";
  } else {
    let myFooter = document.getElementById("myFooter");
    let bounding = myFooter.getBoundingClientRect();
    if (!(bounding.top <= (window.innerHeight || document.documentElement.clientHeight))) {
      mybutton.style.display = "block";
    }
  }
};


let servicio1 = document.getElementById("servicio1");
let servicio2 = document.getElementById("servicio2");
let servicio3 = document.getElementById("servicio3");

let textoServicio1 = document.getElementById("textoServicio1");
let textoServicio2 = document.getElementById("textoServicio2");
let textoServicio3 = document.getElementById("textoServicio3");

let backServicios = document.getElementById("backServicios");
let backServicios2 = document.getElementById("backServicios2");
let backServicios3 = document.getElementById("backServicios3");

let tituloServ = document.getElementById("tituloServ");
let tituloServ2 = document.getElementById("tituloServ2");
let tituloServ3 = document.getElementById("tituloServ3");

servicio1.addEventListener("mouseover", function () {
  textoServicio1.classList.remove("hidde");
  servicio1.style.filter = "grayscale(0%)";
  backServicios.classList.remove("hidde");
  tituloServ.style.fontSize = "2rem";
}
);

servicio1.addEventListener("mouseout", function () {
  textoServicio1.classList.add("hidde");
  textoServicio1.classList.add("byebye");
  servicio1.style.filter = "grayscale(100%)";
  backServicios.classList.add("hidde");
  tituloServ.style.fontSize = "3rem";
}
);

servicio2.addEventListener("mouseover", function () {
  textoServicio2.classList.remove("hidde");
  servicio2.style.filter = "grayscale(0%)";
  backServicios2.classList.remove("hidde");
  tituloServ2.style.fontSize = "2rem";
}
);

servicio2.addEventListener("mouseout", function () {
  textoServicio2.classList.add("hidde");
  textoServicio2.classList.add("byebye");
  servicio2.style.filter = "grayscale(100%)";
  backServicios2.classList.add("hidde");
  tituloServ2.style.fontSize = "3rem";
}
);

servicio3.addEventListener("mouseover", function () {
  textoServicio3.classList.remove("hidde");
  servicio3.style.filter = "grayscale(0%)";
  backServicios3.classList.remove("hidde");
  tituloServ3.style.fontSize = "2rem";
}
);

servicio3.addEventListener("mouseout", function () {
  textoServicio3.classList.add("hidde");
  textoServicio3.classList.add("byebye");
  servicio3.style.filter = "grayscale(100%)";
  backServicios3.classList.add("hidde");
  tituloServ3.style.fontSize = "3rem";
}
);

function observer(targetId, classAnimation) {

  const texto = document.getElementById(targetId);
  const callback = (entradas, opciones) => {

    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add(classAnimation);
      }

    });
  }
  const opciones = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1

  });
  opciones.observe(texto);
}

observer("owner1", "animacionNosotros");
observer("owner2", "animacionNosotros");
observer("textoMaps", "animacionMaps");


let breadActive = "";


function observer3(targetId, idElemento) {
  const texto = document.getElementById(targetId);
  const callback = (entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        if (breadActive !== "") {
          $("#" + breadActive).removeClass("active-bread");
          if (breadActive !== "contacto") {
            $("#" + breadActive).addClass("grey");
          }
          if (breadActive == "contacto") {
            $("#" + idElemento).removeClass("contacto-active");
            $("#" + idElemento).addClass("contacto-noActive");
          }
        }
        breadActive = idElemento;
        $("#" + idElemento).addClass("active-bread");
        $("#" + idElemento).removeClass("grey");
        if (breadActive === "contactoBTN") {
          $("#" + idElemento).addClass("contacto-active");
          $("#" + idElemento).addClass("active-bread");
          $("#" + idElemento).removeClass("grey");
          $("#" + idElemento).removeClass("contacto-noActive");

        }
      } else {
        if (idElemento === "contactoBTN") {
          $("#" + idElemento).removeClass("contacto-active");
          $("#" + idElemento).addClass("contacto-noActive");
          $("#" + idElemento).removeClass("active-bread");
        }
      }
    });
  };
  const opciones = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2
  });
  opciones.observe(texto);
}
``


observer3("inicio", "inicioBTN")
observer3("nosotros", "nosotrosBTN")
observer3("servicios", "serviciosBTN")
observer3("ubicaciones", "ubiBTN")
observer3("contacto", "contactoBTN")


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
  }

});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('navbarHeight');
});
