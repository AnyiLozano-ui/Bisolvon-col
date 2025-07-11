$(document).ready(function () {
  // Función para mostrar y ocultar un popup
  function togglePopup(mostrarBtn, cerrarBtn, popup) {
    mostrarBtn.click(function () {
      popup.css("display", "block");
    });

    cerrarBtn.click(function () {
      popup.css("display", "none");
    });
  }

  // Primer conjunto de elementos
  var mostrarPopupBtn1 = $("#mostrarPopup");
  var cerrarPopupBtn1 = $("#cerrarPopup");
  var miPopup1 = $("#miPopup");
  togglePopup(mostrarPopupBtn1, cerrarPopupBtn1, miPopup1);

  // Segundo conjunto de elementos - slide 2
  var mostrarPopupBtn2 = $("#mostrarPopup2");
  var cerrarPopupBtn2 = $("#cerrarPopup2");
  var miPopup2 = $("#miPopup2");
  togglePopup(mostrarPopupBtn2, cerrarPopupBtn2, miPopup2);

  // Segundo conjunto B de elementos - slide 2
  var mostrarPopupBtn2b = $("#mostrarPopup2b");
  var cerrarPopupBtn2b = $("#cerrarPopup2b");
  var miPopup2b = $("#miPopup2b");
  togglePopup(mostrarPopupBtn2b, cerrarPopupBtn2b, miPopup2b);

  // Segundo conjunto C de elementos - slide 2
  var mostrarPopupBtn2c = $("#mostrarPopup2c");
  var cerrarPopupBtn2c = $("#cerrarPopup2c");
  var miPopup2c = $("#miPopup2c");
  togglePopup(mostrarPopupBtn2c, cerrarPopupBtn2c, miPopup2c);

  // Tercer conjunto de elementos
  var mostrarPopupBtn3 = $("#mostrarPopup3");
  var cerrarPopupBtn3 = $("#cerrarPopup3");
  var miPopup3 = $("#miPopup3");
  togglePopup(mostrarPopupBtn3, cerrarPopupBtn3, miPopup3);

  // Cuarto conjunto de elementos
  var mostrarPopupBtn4 = $("#mostrarPopup4");
  var cerrarPopupBtn4 = $("#cerrarPopup4");
  var miPopup4 = $("#miPopup4");
  togglePopup(mostrarPopupBtn4, cerrarPopupBtn4, miPopup4);

  // Quinto conjunto de elementos - Slide 7
  var mostrarPopupBtn5 = $("#mostrarPopup5");
  var cerrarPopupBtn5 = $("#cerrarPopup5");
  var miPopup5 = $("#miPopup5");
  togglePopup(mostrarPopupBtn5, cerrarPopupBtn5, miPopup5);

  // Sexto conjunto de elementos - Slide 7
  var mostrarPopupBtn6 = $("#mostrarPopup6");
  var cerrarPopupBtn6 = $("#cerrarPopup6");
  var miPopup6 = $("#miPopup6");
  togglePopup(mostrarPopupBtn6, cerrarPopupBtn6, miPopup6);

  // Séptimo conjunto de elementos - Slide 8
  var mostrarPopupBtn7 = $("#mostrarPopup7");
  var cerrarPopupBtn7 = $("#cerrarPopup7");
  var miPopup7 = $("#miPopup7");
  togglePopup(mostrarPopupBtn7, cerrarPopupBtn7, miPopup7);

  // DIMENSIONES
  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(CambioVentana, 200);
  });

  function CambioVentana() {
    var htmlancho = $("html").width();
    var htmlalto = $("html").height();
    var bodyancho = $("body").width();
    var bodyalto = $("body").height();
    if ($("body").hasClass("alto") && bodyancho > 1024) {
      $("body").removeClass("alto").addClass("ancho");
    }
    if ($("body").hasClass("ancho") && bodyalto > htmlalto) {
      $("body").removeClass("ancho").addClass("alto");
    }
  }

  // Ejecutar CambioVentana una vez en la carga inicial
  CambioVentana();
});
