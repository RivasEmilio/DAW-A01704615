(function ($) {
    'use strict';

    // Preloader
    $(window).on('load', function () {
        $('#preloadScreen')
            .delay(1500)
            .fadeOut('slow', function () {
                $('#preloadScreen').remove();
            });

    });
})(window.jQuery);

var domN;

var nombreDominio = "agente-seguros";

var plantilla = 1;

var colorPlantilla = 1;

let asist = [];

let logos = ["aba", "afirme", "ANA", "argos", "atlas",
    "axa", "bupa", "chubb", "dentegra", "gbg",
    "gmx", "gnp", "inbursa", "insignia", "mapfre",
    "metlife", "potosi", "prevem", "qualitas", "seguros-monterrey",
    "sisnova", "sura", "thona", "vepormas", "zurich"];

let redes = ["facebook", "twitter", "instagram", "youtube", "linkedin"];

let totalAseguradoras = 0;

let asegSel = [];

let asegRamos = [];

let bottom = 0;

let arriba = 0;

let ramos = 0;

let botom1 = 0

let numeroCorreos = 1;

let cantidadNumeros = 1;

let agencias = 0;

let borrado = 10;

let ddcomplete = "Ramos";

let complete = true;

let dirCorta = "";

let titulo = "Agente de Seguros";

let disponible = false;

$(document).ready(function () {

    $('#nDom').hide();

    $('#yDom').hide();

    $('#secnav').hide();

    $('#asignar').hide();

    $('#continuar').removeClass("d-flex");

    $('#continuar').hide();

    $("div").find('.cont-element').each(function () {//aqui se esconden los elementos al iniciar la pagina

        $(this).hide();

    });



});

$(document).on('click', '.side-element', function (e) {// aqui se asigna el colo cuando se selecciona un elemento del sidenav

    if ($(this).attr("activo") == "1") {// el atributo activo tiene que ser 1 para que se pueda acceder a la pagina

        $(this).addClass("active1");
        $(".side-element").not(this).removeClass("active1");
        $('#place-holder').remove();

        let sidenav = $(this).attr("nav-id");

        $("div").find('.cont-element').each(function () {// se buscan los elementos y se activa el correspondiente a el sidenav seleccionado

            if (sidenav == $(this).attr("nav-id")) {

                $(this).show();
            } else
                $(this).hide();

        });

        if (sidenav == "3") {
            $('#secnav').slideDown(function () { });
        } else {
            $('#secnav').slideUp(function () { });
        }
    }


});

$(".plantilla, .card-img-top").click(function () {//aqui se asigna cual plantilla se esta viendo al dar click en el boton de seleccionar o en el preview

    let button = $(this).attr("id-template");

    plantilla = $(this).attr("id-template");//AQUI SE GUARDA QUE PLANTILLA SE SELECCIONO

    $("div").find('.plantilla').each(function () {

        if (button == $(this).attr("id-template")) {//se busca el  de preview de cada plantilla

            $(this).addClass("viewing");
            $(this).html("<p class='align-baseline'>Seleccionado</p>");

        } else if (button != $(this).attr("id-template")) {
            $(this).removeClass("viewing");
            $(this).html("<p class='align-baseline'>Seleccionar</p>");
        }


    });

    $("div").find('.prev').each(function () {

        if (button == $(this).attr("id-template")) {//se busca el  de preview de cada plantilla

            $(this).addClass("selected");

        } else
            $(this).removeClass("selected");

    });

    let color = 0;
    $("div").find('.colorSelect').each(function () {

        if (button == $(this).attr("id-template") && color == 0) {// aqui se agrega asigna el color de la plantilla

            colorPlantilla = $(this).attr("color-template");//variable global de color de plantilla se iguala a 1 ya que al seleccionar otra plantilla el color se vuelve 1
            $(this).addClass("cSelected");
            $(".colorSelect").not(this).removeClass("cSelected");
            color++;
        }

    });

    $("div").find('.card-img-top').each(function () {

        if (button == $(this).attr("id-template")) {
            $(this).attr("src", "../Content/img/thumbnail" +button+"1.png");
        }
    });


});

$(".btprev").click(function () {//este es el boton de seleccion que se encuentra en el preview de cada plantilla

    let button = $(this).attr("id-template");

    plantilla = $(this).attr("id-template");//AQUI SE GUARDA QUE PLANTILLA SE SELECCIONO

    $("div").find('.plantilla').each(function () {

        if (button == $(this).attr("id-template")) {//se busca el boton de seleccionar y se le agrega la clase viewing

            $(this).addClass("viewing");

        } else
            $(this).removeClass("viewing");

    });

    $("div").find('.prev').each(function () {

        if (button == $(this).attr("id-template")) {//se busca el  de preview de cada plantilla y se le agrega el contorno

            $(this).addClass("selected");

        } else
            $(this).removeClass("selected");

    });

    let color = 0;
    $("div").find('.colorSelect').each(function () {

        if (button == $(this).attr("id-template") && color == 0) {

            $(this).addClass("cSelected");
            colorPlantilla = $(this).attr("color-template"); //AQUI SE GUARDA EL COLOR DE LA PLANTILLA

            $(".colorSelect").not(this).removeClass("cSelected");
            color++;
        }

    });


});

$(".colorSelect").click(function () {//aqui se selecciona el color de la plantilla

    let pick = $(this);

    let color = $(this).attr("color-template");

    colorPlantilla = $(this).attr("color-template"); //AQUI SE GUARDA EL COLOR DE LA PLANTILLA

    let button = $(this).attr("id-template");

    $("div").find('.viewing').each(function () {//se le asigna la clase cSelected al boton color que le da su contorno

        if (button == $(this).attr("id-template")) {

            pick.addClass("cSelected");
            $(".colorSelect").not(pick).removeClass("cSelected");
        }

    });

    $("div").find('.bodyprev').each(function () {

        if (button == $(this).attr("id-template")) {
            //aqui se selecciona que imagen se va a mostrar con el preview la nomeclatura para saber el preview es preview con el id del template y el color un ejemplo seria preview12 que seria el template 1 con el color 2
            $(this).html("<img src='../Content/img/preview" + button + color + ".png' alt='preview template'  width='720' height='842'></img>");

        }

    });

    $("div").find('.card-img-top').each(function () {//aqui se cambia el thumbnail de la selecion de plantilla

        if (button == $(this).attr("id-template")) {
            $(this).attr("src", "../Content/img/thumbnail" + button + color + ".png");
        }
    });

});

$(document).on('click', '.logoAsegura', function (e) { //aqui se crean los logos de aseguradoras

    let posicion = $(this).attr("aseguradora-id");

    let imagen = logos[posicion - 1];

    if (agencias < 5) {//se crean en el div con id insurance
      
        agencias++;
        $(this).addClass("insureSelected");//se agrega la clase de seleccionado

        $(this).removeClass("logoAsegura");

        $("a#totalase").html(agencias);// se cambia el numero total que se muestra en el pop up

        $("div#insurance").append(
            "<div class='d-flex flex-column px-2 dbox' aseguradora-id='" + posicion + "'><div class='boxAsegura d-flex flex-row align-items-center justify-content-center'><img src='../Content/Icons/" + imagen + ".svg' alt='Imagen seguro' width='70' height='80' class='imgLogo'> <i class=' material-icons insureDelete m-0 ' aseguradora-id='" + posicion + "'>clear</i></div></div>");

        arriba++;

        //aqui se crean las aseguradoras a la parte de asignar ramos
        let html = $(this)[0].outerHTML;

        let dropdown = [];

        let i = 1;

        ddcomplete = "Ramos";

        $("#ramos-id").find('.ramoSelected').each(function () {

            let nombre = $(this).attr("nombre-ramo");

            dropdown[i] = "<div class='form-check' nombre-ramo='" + nombre + "' aseguradora-id='" + posicion + "'><input class='form-check-input ' type='checkbox'  id='Ramo" + nombre + "' value=" + nombre + " checked name='" + posicion + i + "'>  <label class= 'form-check-label' for= 'radioRamo" + nombre + "'>" + nombre + "</label></div>"

            i++;
        });

        for (let i = 1; i < dropdown.length; i++) {

            ddcomplete += dropdown[i];
        }

        $("#seleccion-2").append("<div class='d-flex flex-column align-items-center boxadd px-1' aseguradora-id='" + posicion + "'>" + html + "<div class='dropdown-menu p-4 ddram' aseguradora-id='" + posicion + "'>" + ddcomplete + "</div></div>");


        $("#seleccion-2").find('.insureSelected').each(function () {

            let posicion = $(this).attr("aseguradora-id");

            $(this).addClass("insureS2");

            $(this).removeClass("insureSelected");

            $(this).attr("data-toggle", "dropdown");

            $(this).attr("aria-haspopup", "true");

            $(this).attr("id", "ddm" + posicion);

            $(this).attr("aria-expanded", "false");
        });

    } else if (agencias < 7) {
        agencias++;

        $(this).addClass("insureSelected");

        $("a#totalase").html(agencias);// se cambia el numero total que se muestra en el pop up

        $(this).removeClass("logoAsegura");

        bottom++;
        $("div#insurance1").addClass("d-flex flex-row py-3 px-2");// esta clase se le quita a el segundo row para conservar estetica y no tener espacio vacio
        $("div#insurance1").append(
            "<div class='d-flex flex-column px-2 dbox'agencias='" + agencias + "' aseguradora-id='" + posicion + "'><div class='boxAsegura d-flex flex-row align-items-center justify-content-center'><img src='../Content/Icons/" + imagen + ".svg' alt='Imagen seguro' width='70' height='80' class='imgLogo' ><i class=' material-icons insureDelete m-0' aseguradora-id='" + posicion + "'>clear</i></div></div>");

        //aqui se crean las aseguradoras a la parte de asignar ramos
        let html = $(this)[0].outerHTML;

        let dropdown = [];

        let i = 1;

        ddcomplete = "Ramos";

        $("#ramos-id").find('.ramoSelected').each(function () {

            let nombre = $(this).attr("nombre-ramo");

            dropdown[i] = "<div class='form-check' nombre-ramo='" + nombre + "' aseguradora-id='" + posicion + "'><input class='form-check-input ' type='checkbox'  id='Ramo" + nombre + "' value=" + nombre + " checked name='" + posicion + i + "'>  <label class= 'form-check-label' for= 'radioRamo" + nombre + "'>" + nombre + "</label></div>"

            i++;
        });

        for (let i = 1; i < dropdown.length; i++) {

            ddcomplete += dropdown[i];
        }

        $("#seleccion-2").append("<div class='d-flex flex-column align-items-center boxadd px-1' aseguradora-id='" + posicion + "'>" + html + "<div class='dropdown-menu p-4 ddram' aseguradora-id='" + posicion + "'>" + ddcomplete + "</div></div>");


        $("#seleccion-2").find('.insureSelected').each(function () {

            let posicion = $(this).attr("aseguradora-id");

            $(this).addClass("insureS2");

            $(this).removeClass("insureSelected");

            $(this).attr("data-toggle", "dropdown");

            $(this).attr("aria-haspopup", "true");

            $(this).attr("id", "ddm" + posicion);

            $(this).attr("aria-expanded", "false");
        });
    }

    
    

});

$(document).on('click', '.insureSelected, .insureDelete', function (e) { //aqui se controlan las aseguradoras a seleccionar se pueden borrar dando click en el pop up o a la X en cada cuadro

    let posicion = $(this).attr("aseguradora-id");
    agencias--;
    $("a#totalase").html(agencias);// se cambia el numero total que se muestra en el pop up

    $("div#insurance").find('.dbox').each(function () {

        if (posicion == $(this).attr("aseguradora-id")) {//se busca el elemento en el pop up y se cambia su clase a no seleccionado
            arriba--;
        }
    });

    $("div#insurance1").find('.dbox').each(function () {

        if (posicion == $(this).attr("aseguradora-id")) {//se busca el elemento en el pop up y se cambia su clase a no seleccionado
            bottom--;

        }
    });


    $("div#seleccion-aseguradoras").find('.insureSelected').each(function () {

        if (posicion == $(this).attr("aseguradora-id")) {//se busca el elemento en el pop up y se cambia su clase a no seleccionado
            $(this).addClass("logoAsegura");
            $(this).removeClass("insureSelected");

        }
    });


    $("div#seleccion-2").find('.boxadd').each(function () {

        if (posicion == $(this).attr("aseguradora-id")) {//se busca el elemento en el pop up y se cambia su clase a no seleccionado
            $(this).remove();
        }
    });

    $("div").find('.dbox').each(function () {//se busca el icono en la seccion de aseguradoras y se elimina

        if (posicion == $(this).attr("aseguradora-id")) {
            $(this).remove();
            


        }
    });

    if ((arriba + bottom) <= 5) {//esto controla el espacio en los rows y si la parte de arriba cuenta con espacio para los elementos de abajo
        $("#insurance1").find('.dbox').each(function () {
            let posicion2 = $(this).attr("aseguradora-id");
            let imagen2 = logos[posicion2 - 1];
            $("div#insurance").append(
                "<div class='d-flex flex-column px-2 dbox' aseguradora-id='" + posicion2 + "'><div class='boxAsegura d-flex flex-row align-items-center justify-content-center'><img src='../Content/Icons/" + imagen2 + ".svg' alt='Imagen seguro' width='70' height='80' class='imgLogo'><i class=' material-icons insureDelete m-0' aseguradora-id='" + posicion2 + "'>clear</i></div></div>");
            $("div#insurance1").removeClass("d-flex flex-row py-3");
            $(this).remove();
        });
    }

    if (bottom == 0) {
        $("div#insurance1").removeClass("d-flex flex-row py-3");// esta clase se le quita a el segundo row para conservar estetica y no tener espacio vacio
    }

});

$(document).on('click', '#foto-agent', function (e) { //aqui se controla la imagen que se muestra en el preview de presentacion

    $("#foto-agente").html("<img class='rounded-circle' src='../Content/imagen-prueba/harold.png' alt='Imagen del Agente' width='60' height='60'></img>");

    console.log("radio test");

    $("#text-fa").addClass("presUB");

    $("#text-la").removeClass("presUB");

});

$(document).on('click', '#logo-agent', function (e) {  //aqui se controla la imagen que se muestra en el preview de presentacion

    $("#foto-agente").html("<img class='rounded-circle' src='../Content/imagen-prueba/logo.jpg' alt='Imagen del Agente' width='60' height='60'></img>");

    console.log("radio test");

    $("#text-la").addClass("presUB");

    $("#text-fa").removeClass("presUB");

});

$(document).on('click', '.copland', function (e) { //esta funcion copia el url de la landing page en la seccion de publicacion

    let id = $(this).attr("codigo-land");

    $("div").find('.pubTexto').each(function () {

        if (id == $(this).attr("codigo-land")) {

            let copiar = $(this).val();

            $("#copyfrom").attr("value",copiar);

            var copyText = document.getElementById("copyfrom");

            copyText.select();

            copyText.setSelectionRange(0, 99999);

            document.execCommand("copy");
        }

    });


});

$(document).on('click', '.p-select', function (e) { //aqui se selecciona la imagen principal de cada seguro en la seccion de ramos

    let id = $(this).attr("nombre-ramo");

    let img = $(this).attr("n-imagen");

    $(".temp-ramo").find('.p-select').each(function () {

        if ($(this).attr("nombre-ramo") == id) {

            $(this).html("<p class='align-baseline py-2'>Elegir</p>");

            $(this).removeClass("viewing");
        }

    });

    $(this).addClass("viewing");

    $(".temp-ramo").find('.viewing').each(function () {

        if ($(this).attr("nombre-ramo") == id) {

            $(this).html("<p class='align-baseline py-2'>Elegido</p>");
        }

    });

    $(".temp-ramo").find('.imagen').each(function () {//aqui se busca la imagen selccionada y se le agrega el marco

        if (id == $(this).attr("nombre-ramo") && img == $(this).attr("n-imagen")) {

            $(this).addClass("selected");

        } else if (id == $(this).attr("nombre-ramo")) {

            $(this).removeClass("selected");
        }


    });

});

$(document).on('click', '.boxramo', function (e) { //aqui se seleccionan los ramos 


    let nombre = $(this).attr("nombre-ramo");//nombre ramo contiene literalmente el nombre del ramo

    let posicion = $(this).attr("ramo-id");

    if (ramos < 4) {

        ramos++;

        $(this).addClass("ramoSelected");

        $(this).removeClass("boxramo");

        $("a#totalara").html(ramos);

        $("div#ramos").append(//se agregan en el div con id ramos
            "<div class='d-flex flex-column px-2 rbox' ramo-id=" + posicion + " nombre-ramo=" + nombre + "><div class='ramo d-flex flex-row align-items-center justify-content-center'><p class='m-0 text-edit'>" + nombre + "&nbsp</p><i class='m-0 material-icons elim'>clear</i></div></div>");


    } else {//una ves que son mas de 4 ramos se mandan al div secundario

        ramos++;

        $(this).addClass("ramoSelected");

        $("a#totalara").html(ramos);

        $(this).removeClass("boxramo");

        botom1++;

        console.log("segunda linea");

        $("div#ramos1").addClass("d-flex flex-row px-3 py-3");

        $("div#ramos1").append(
            "<div class='d-flex flex-column px-2 rbox' ramo-id=" + posicion + " nombre-ramo=" + nombre + " ><div class='ramo d-flex flex-row align-items-center justify-content-center'><p class='m-0 text-edit'>" + nombre + "&nbsp</p><i class='m-0 material-icons elim'>clear</i></div></div>");
    }
    let i = 1;

    $("#seleccion-2").find('.ddram').each(function () {

        let pos2 = $(this).attr("aseguradora-id");

        $(this).append("<div class='form-check' nombre-ramo='" + nombre + "'  aseguradora-id='" + pos2 + "'><input class='form-check-input ' type='checkbox'  id='Ramo" + nombre + "' value=" + nombre + " name='" + posicion + i + "' checked>  <label class= 'form-check-label' for= 'radioRamo" + nombre + "'>" + nombre + "</label></div>");

        i++;
    });

    $("#temp-ramo").find('.titulo-ramo').each(function () {

        $(this).html(nombre);

    });

    $("#temp-ramo").find('.p-select').each(function () {

        $(this).attr("nombre-ramo", "" + nombre + "");

    });

    $("#temp-ramo").find('.ver-bot').each(function () {

        $(this).attr("nombre-ramo", "" + nombre + "");

    });

    $("#temp-ramo").find('.imagen').each(function () {//aqui se busca la imagen selccionada y se le agrega el marco

        $(this).attr("nombre-ramo", "" + nombre + "");

    });

    $("#temp-ramo").find('.close-ramo').attr("nombre-ramo", "" + nombre + "");

    $("#temp-ramo").find('.ddramo').attr("nombre-ramo", "" + nombre + "");

    $("#temp-ramo").find('.mesSec').attr("nombre-ramo", "" + nombre + "");

    $("#temp-ramo").find('.mesPrin').attr("nombre-ramo", "" + nombre + "");

    $("#temp-ramo").attr("nombre-ramo", "" + nombre + "");

    let templateRamo = document.getElementById("temp-ramo").outerHTML;

    $("#campo-ramos").append(templateRamo);

    $("#campo-ramos").find('.temp-ramo').each(function () {

        $(this).removeClass("invisible");

        $(this).removeAttr('id');

    });

});

$(document).on('click', '.elim, .killand', function (e) { //aqui se eliminan los ramos

    let posicion = $(this).parent().parent().attr("ramo-id");//se usa ramo id para saber cual eliminar

    $("#pub").find('.target').each(function () {//se elimina el elemento de copiar landing page esto solo aplica cuando se acciona el botond de borrar en la etapa de publicacio

        posicion = $(this).attr("ramo-id");
        let eliminar = $(this).attr("domRamo");
        console.log("se elimino " + eliminar);
        let data = {
            Dominio_Page: nombreDominio,
            Ramo: eliminar
        };

        $.post("/Form/eliminarPagina", { formData: data },
            function () { console.log("se elimino " + eliminar) });
        $(this).remove();

    });

    $("#pub").find('.landlink').each(function () {//el mismo caso ocurre aqui

        if ($(this).attr("ramo-id") == posicion) {

            $(this).remove();
        }
    });

    ramos--;

    let nombre;

    $("div").find('.rbox').each(function () {

        if (posicion == $(this).attr("ramo-id")) {

            $(this).remove();

            $("a#totalara").html(ramos);

        }
    });

    $("div").find('.ramoSelected').each(function () {

        if (posicion == $(this).attr("ramo-id")) {

            $(this).addClass("boxramo");
            $(this).removeClass("ramoSelected");
            nombre = $(this).attr("nombre-ramo");

        }
    });

    if (ramos <= 4 && botom1 > 0) {
        $("#ramos1").find('.rbox').each(function () {

            let posicion2 = $(this).attr("ramo-id");

            let nombre2 = $(this).attr("nombre-ramo");

            $("div#ramos").append(
                "<div class='d-flex flex-column px-2 rbox' ramo-id=" + posicion2 + "><div class='ramo d-flex flex-row align-items-center justify-content-center'><p class='m-0 text-edit'>" + nombre2 + "&nbsp</p><i class='m-0 material-icons elim' >clear</i></div></div>");

            $(this).remove();

            $("div#ramos1").removeClass("d-flex flex-row px-3 py-3");

        });
        botom1 = 0;
    }

    if (botom1 == 0) {
        $("div#ramos1").removeClass("d-flex flex-row px-3 py-3");
    }

    $("#seleccion-2").find('.form-check').each(function () {

        if (nombre == $(this).attr("nombre-ramo")) {
            $(this).remove();
        }
    });

    $("#campo-ramos").find('.temp-ramo').each(function () {

        if (nombre == $(this).attr("nombre-ramo")) {
            $(this).remove();
        }
    });

});

$(".buttNeDom").click(function () {//este boton es cuando no tienes dominio
    $("div").find('.nDom').show();
    $("div").find('.yDom').hide();
    $(this).addClass("butt-domS");
    $(".butt-dom").not(this).removeClass("butt-domS");
});

$(".buttYaDom").click(function () {//este es cuando ya cuentas con dominio
    $(this).addClass("butt-domS");
    $(".butt-dom").not(this).removeClass("butt-domS");

    $("div").find('.side-element').each(function () {


        if ($(this).attr("nav-id") == "2") {// como ya se cuenta con dominio se desbloquea la seleccion de plantilla

            $(this).attr("activo", "1");
        }

    });

    $("div#dominio").html("<div class='mr-auto'> <p class='text-format m-0' style='color: #12CBED; font-weight: bold;'>Dominio</p></div><div class='h-100 d-flex align-items-center'><i class='material-icons chev-con' style='color: #12CBED;'>check_circle</i></div>");

    $("div").find('.yDom').show();

    $("div").find('.nDom').hide();
});

$("#domNombre").keyup(function () {//aqui se verifica el input del nombre de cominio

    var data = $("#domNombre").val();

    if (data !== '') {
        $.post("/Form/findName", { formData: data },
            function (result) {

                if (result == 1) {

                    $("#domNombre").addClass("errorDom");

                    $('#domname').html(" <div class='d-flex flex-row align-items-center  available'><i class='m-0 material-icons' style='color: #ed2112; font-size: 14px;'>not_interested</i><p class='m-0' style='color: #ed2112;'>&nbsp;no disponible</p></div>");

                    $("#domNombre").removeClass("succDom");

                    disponible = false;

                }
                else {
                    $('#domname').html(" <div class='d-flex flex-row align-items-center  available'><i class='m-0 material-icons' style='color: #12CBED; font-size: 14px;'>check_circle</i><p class='m-0'>&nbsp;disponible</p></div>");

                    $("#domNombre").addClass("succDom");

                    $("#domNombre").removeClass("errorDom");

                    disponible = true;
                }
            }, "json");

    } else {

        $("#domNombre").removeClass("errorDom");

        $("#domNombre").removeClass("succDom");

        $('#domname').html("");

        disponible = false;

    }
   

    

});

$(".confDom").click(function () {// aqui se confirma tu dominio y te mueve a la siguiente seccion

    var value = document.getElementById('domNombre').value;// se verifica que el usuario si haya ingresado el nombre

    if (value === '') {

        $("#domNombre").removeClass("succDom");

        $("#domNombre").addClass("errorDom");

        $('#domname').html("");

    } else if (disponible){

        $("div").find('.side-element').each(function () {

            if ($(this).attr("nav-id") == "2") {

                $(this).attr("activo", "1");
            }

        });
        nombreDominio = document.getElementById('domNombre').value;//AQUI SE GUARDA EL NOMBRE DEL DOMINIO

        let data = {
            Dominio_Page: nombreDominio
        };

        $.post("/Form/addAgente", { formData: data },
            function () { console.log("success") });//con esta funcion se crea el registro del dominio

        console.log("nombre dominio=" + nombreDominio);

        $("div#dominio").html("<div class='mr-auto'> <p class='text-format m-0' style='color: #12CBED; font-weight: bold;'>Dominio</p></div><div class='h-100 d-flex align-items-center'><i class='material-icons chev-con' style='color: #12CBED;'>check_circle</i></div>");


        $("div").find('.cont-element').each(function () {

            if ($(this).attr("nav-id") == 2) {

                $(this).show();
            } else
                $(this).hide();

        });

        $("div").find('.side-element').each(function () {

            if ($(this).attr("nav-id") == 2) {

                $(this).addClass("active1");
            } else
                $(this).removeClass("active1");

        });
    }

});

$(".guardarPlant").click(function () {//aqui se guarda la plantilla y el color selecionados y te mueve a la siguiente seccion

    $("div").find('.side-element').each(function () {

        if ($(this).attr("nav-id") == "3") {

            $(this).attr("activo", "1");
            console.log(plantilla, colorPlantilla);
            $("div#plantilla").html("<div class='mr-auto'> <p class='text-format m-0' style='color: #12CBED; font-weight: bold;'>Plantilla</p></div><div class='h-100 d-flex align-items-center'><i class='material-icons chev-con' style='color: #12CBED;'>check_circle</i></div>");
        }
    });

    $("div").find('.cont-element').each(function () {

        if ($(this).attr("nav-id") == 3) {

            $(this).show();
        } else
            $(this).hide();

    });

    $("div").find('.side-element').each(function () {

        if ($(this).attr("nav-id") == 3) {

            $(this).addClass("active1");
        } else
            $(this).removeClass("active1");

    });


    $("div").find('.drop').each(function () {

        $(this).removeClass("d-flex ");
        $(this).hide();

    });
    $('#secnav').slideDown(function () { });
});

$(document).on('click', '.ddpb', function (e) {//aqui se controlan los dropdowns de la seccionde personalizar

    let index = $(this).attr("per-at");

    if ($(this).attr("act") == "off") {

        $(this).html("expand_less");

        $(this).attr("act", "on");

    } else {

        $(this).html("expand_more");

        $(this).attr("act", "off");
    }

    $("div").find('.drop').each(function () {

        if ($(this).attr("per-at") == index) {

            if ($(this).is(":visible")) {

                $(this).removeClass("d-flex ");

                $(this).slideUp(function () { });
            } else {

                $(this).slideDown(function () { });

                $(this).addClass("d-flex ");
            }
        }
    });

});

$(document).on('click', '.close-ramo', function (e) {//aqui se controlan los dropdowns de la seccionde personalizar

    let index = $(this).attr("nombre-ramo");

    if ($(this).attr("act") == "off") {

        $(this).html("expand_less");

        $(this).attr("act", "on");

        $(this).closest('.cardPad').attr("style", "margin-bottom: 0px !important");

    } else {

        $(this).html("expand_more");

        $(this).attr("act", "off");

        $(this).closest('.cardPad').attr("style", "margin-bottom: 15px !important");
    }

    $("#campo-ramos").find('.ddramo').each(function () {

        if ($(this).attr("nombre-ramo") == index) {

            if ($(this).is(":visible")) {

                $(this).slideUp(function () { });

            } else {

                $(this).slideDown(function () { });
            }
        }
    });

})

$(document).on('click', '.helpSelect', function (e) { //aqui se selecciona el metodo de ayuda del pop up


    $(this).addClass("helpSelected");

    let ayudaMetodo = $(this).attr("help-id");

    $(".helpSelect").not(this).removeClass("helpSelected");

});

$(document).on('click', '.addCorreo', function (e) {//aqui se agregan correos en la seccion de personalizar

    numeroCorreos++;

    if (numeroCorreos <= 3) {
        $("div#correos").append("<div class='d-flex flex-row py-1 mail' correo-id=" + numeroCorreos + "><input type='email' maxlength='100' id='mail" + numeroCorreos + "' class='form-control' placeholder='agente@correo" + numeroCorreos + ".mx' aria-label='correo' aria-describedby='basic-addon' correo-id='" + numeroCorreos + "'></input><i class='m-0 material-icons mailDelete' style='font-size: 30px; color: #4E455C;' correo-id='" + numeroCorreos + "'>clear</i></div>");
    }

});

$(document).on('click', '.mailDelete', function (e) {//aqui se eliminan los correos y se ajusta el layout de los mismos

    let posicion = $(this).attr("correo-id");

    numeroCorreos--;


    $("#correos").find('.mail').each(function () {

        if (posicion == $(this).attr("correo-id")) {

            $(this).remove();
        }

        if ($(this).attr("correo-id") != 1) {

            $(this).attr("correo-id", numeroCorreos);

            $("#correos").find('.form-control').each(function () {

                if ($(this).attr("correo-id") != "1") {

                    $(this).attr("correo-id", numeroCorreos);

                    $(this).attr("placeholder", "agente@correo" + numeroCorreos + ".mx");

                    $(this).attr("id", "mail" + numeroCorreos);
                }

            });

            $("#correos").find('.mailDelete').each(function () {

                if ($(this).attr("correo-id") != "1") {

                    $(this).attr("correo-id", numeroCorreos);
                }

            });
        }

    });




});

$(document).on('click', '.addTelefono', function (e) { //se agregan numeros de telefono en la seccion de personalizar

    if (cantidadNumeros < 5) {

        cantidadNumeros++;

        console.log(cantidadNumeros);

        $("div#numeros").append("<div class='d-flex flex-row py-3 px-2 numForm' num-id='" + cantidadNumeros + "'><div class='form-check form-check-inline' id='botonesTel'><input num-id='" + cantidadNumeros + "' id='num" + cantidadNumeros + "'  type='text' class='form-control' placeholder='10 dígitos' maxlength='10' style='margin-right: 30px; width: 150px;'><input num-id='" + cantidadNumeros + "' class='form-check-input rbt' type='radio' name='tel" + cantidadNumeros + "' id='whats" + cantidadNumeros + "' value='numero" + cantidadNumeros + "' checked><label class='form-check-label' for='whats" + cantidadNumeros + "' ><a class='formText' >Whatsapp</a></label><input num-id='" + cantidadNumeros + "' class='form-check-input rbt' type='radio' name='tel" + cantidadNumeros + "' id='celular" + cantidadNumeros + "' value='numero" + cantidadNumeros + "'><label class='form-check-label' for='celular" + cantidadNumeros + "'><a class='formText'>Celular</a></label><input num-id='" + cantidadNumeros + "' class='form-check-input rbt' type='radio' name='tel" + cantidadNumeros + "' id='fijo" + cantidadNumeros + "' value='numero" + cantidadNumeros + "'><label class='form-check-label' for='fijo" + cantidadNumeros + "'><a class='formText' style='margin-right: 150px;'>Fijo</a></label><i class='m-0 material-icons numDelete' style='font-size: 30px; color: #4E455C;' num-id='" + cantidadNumeros + "'>clear</i></div></div>");
    }

});

$(document).on('click', '.numDelete', function (e) { //aqui se eliminan los numeros 

    let posicion = $(this).attr("num-id");

    let counter = 2;

    $("#numeros").find('.numForm').each(function () {


        if (posicion == $(this).attr("num-id") && cantidadNumeros > 1 && cantidadNumeros < 6) {

            cantidadNumeros--;

            borrado = $(this).attr("num-id");

            $(this).remove();

        }

    });

    $("#numeros").find('.numForm').each(function () {

        if ($(this).attr("num-id") != "1") {

            let reshape = $(this).attr("num-id");

            $(this).attr("num-id", counter);



            $("#numeros").find('.numDelete').each(function () {

                if (reshape == $(this).attr("num-id")) {
                    $(this).attr("num-id", counter);

                }

            });
            $(".numForm").find(':input').each(function () {

                if (reshape == $(this).attr("num-id")) {
                    $(this).attr("name", "tel" + counter);
                    $(this).attr("num-id", counter);
                    $(this).attr("id", "num" + counter);

                }

            });

            counter++;
        }


    });


});

$(".gcCambios").click(function () {//aqui se conglomeran y guardan los datos de personalizacion

    let data = {
        Dominio: nombreDominio
    };

    $.post("/Form/clearAgente", { formData: data },
        function () { console.log("success") });

    $(document).find(':input').each(function () {

        $(this).removeClass("incompleto");

        $(this).removeClass("completo");

    });

    complete = true;

    if (document.getElementById('titulo-personal').checked) {

        titulo = document.getElementById('titulo-input').value;

        if (titulo === '') {
            $('#titulo-input').addClass("incompleto");
            complete = false;
        } else {
            $('#titulo-input').addClass("completo");
        }
    }

    redes.forEach(element => {
        if (document.getElementById(element).checked) {

            let text = document.getElementById('' + element + '-text').value;

            if (text === '') {
                $('#' + element + '-text').addClass("incompleto");
                complete = false;
            } else {
                $('#' + element + '-text').addClass("completo");
            }

        }
    });

    if (document.getElementById('mail-check').checked) {

        for (let index = 1; index <= numeroCorreos; index++) {

            let texto = document.getElementById("mail" + index).value;

            if (texto === '') {
                $("#mail" + index).addClass("incompleto");
                complete = false;
            } else {
                $("#mail" + index).addClass("completo");

                let data = {
                    Dominio: nombreDominio,
                    CorreoElectronico_1: texto,
                    Campo: index
                };

                $.post("/Form/addCorreo", { formData: data },
                    function () { console.log("success") });
            }

        }
    }

    for (let index = 1; index <= cantidadNumeros; index++) {

        let texto = document.getElementById("num" + index).value;

        if (texto === '' || texto.length < 10) {
            $("#num" + index).addClass("incompleto");
            complete = false;
        } else {

            $("#num" + index).addClass("completo");
            let data = {
                Dominio: nombreDominio,
                Telefono_1: texto,
                Campo: index
            };

            $.post("/Form/addTelefono", { formData: data },
                function () { console.log("success") });
        }

    }

    if (document.getElementById('dirCorta').checked) {

        let texto = document.getElementById("dirc-text").value;

        if (texto === '' || texto.length < 10) {
            $("#dirc-text").addClass("incompleto");
            complete = false;
        } else {
            dirCorta = texto;
            $("#dirc-text").addClass("completo");

            let data = {
                DireccionCorta: dirCorta,
                Dominio: nombreDominio,
            };

            $.post("/Form/addDirc", { formData: data },
                function () { console.log("success") });

        }
    }

    if (document.getElementById('dirExacta').checked) {

        let camposCompletos = true;
        $(".info-direccion").find(':input').each(function () {

            let texto = $(this).val();

            if (texto === '') {
                $(this).addClass("incompleto");
                complete = false;
                camposCompletos = false;
            } else {
                $(this).addClass("completo");
            }
        });
        if (camposCompletos) {

            let data = {
                Dominio: nombreDominio,
                Dir_Estado: document.getElementById("estado").value,
                Dir_MuniDele: document.getElementById("municipio").value,
                Dir_Calle: document.getElementById("calle").value,
                Dir_Colonia: document.getElementById("colonia").value,
                Dir_NoInt: document.getElementById("nint").value,
                Dir_NoExt: document.getElementById("next").value,
                Dir_CP: document.getElementById("cp").value
            };

            $.post("/Form/addDex", { formData: data },
                function () { console.log("success") });
        }

    }

    totalRamos = 0;

    let nombresDom = [];


    $("div").find('.rbox').each(function () {

        totalRamos++;

    });

    if (totalRamos > 0) {

        $("#campo-ramos").find('textarea').each(function () {

            let texto = $(this).val();

            if (texto === '') {

                $(this).addClass("incompleto");
                complete = false;

            } else {

                $(this).addClass("completo");
            }

        });
    } else {

        complete = false;
    }

    totalAseguradoras = 1;

    asegSel = [];

    $("div").find('.dbox').each(function () {

        asegSel[totalAseguradoras] = $(this).attr("aseguradora-id");  

        totalAseguradoras++;
        

    });

    
    if (totalAseguradoras <= 0) {
        complete = false;
    } 

    if (complete == true) {

        $('#continuar').addClass("d-flex");

        $('#continuar').show();

        $("div").find('.side-element').each(function () {

            if ($(this).attr("nav-id") == "4") {

                $(this).attr("activo", "1");
                console.log(plantilla, colorPlantilla, nombreDominio);
                $("div#personalizar").html("<div class='mr-auto'> <p class='text-format m-0' style='color: #12CBED; font-weight: bold;'>Personalizar</p></div><div class='h-100 d-flex align-items-center'><i class='material-icons chev-con' style='color: #12CBED;'>check_circle</i></div>");
            }
        });

        $("#pub").html("");

        $("div").find('.ramoSelected').each(function () {

            let name = $(this).attr("nombre-ramo");
            let id = $(this).attr("ramo-id");

            $("#pub").append("<div class='d-flex flex-row px-5 py-2 landlink' ramo-id='" + id + "' domRamo='" + name + "'><div class='publicacion d-flex p-2 flex-column'><input type='text' value='" + nombreDominio + ".crmsalto.mx/" + name + "' codigo-land= '" + id + "' class='pubTexto test' disabled> </div><div class= 'd-flex flex-row px-2 '><a style='text-decoration: none !important;' href='http://www." + nombreDominio + ".crmsalto.mx/" + name + "'><div class= 'd-flex flex-column p-2 irland ' codigo-land= '" + id + "' ><div class= 'd-flex flex-row m-0  justify-content-center '><i class= 'material-icons '>launch</i> <p style='text-decoration: none !important;'>Ir a landing</p></div></div></a></div><div class= 'd-flex flex-row px-2 '><div class= 'd-flex flex-column p-2 copland ' codigo-land= '" + id + "'><div class= 'd-flex flex-row m-0 justify-content-center '><i class= 'material-icons '>content_copy</i><p>Copiar Enlace</p></div></div></div><div class= 'd-flex flex-row px-2 '><div class= 'd-flex flex-column p-2 deland' ramo-id='" + id + "' data-toggle='modal' data-target='#delete'><div class= 'd-flex flex-row m-0 justify-content-center '><i class= 'material-icons '>delete_outline</i> <p>Borrar</p></div></div></div></div>");

            let data = {
                Ramo: name,
                Dominio_Page: nombreDominio,
                Plantilla: plantilla,
                Color: colorPlantilla,
                Imagen: 1,
                Titulo_Profesional: titulo
            };

            $.post("/Form/nombreDominio", { formData: data },
                function () { console.log("success") });

            $.post("/Form/clearAseguradoras", { formData: data },
                function () { console.log("success") });
        });
      
        
            let facebook = $("#facebook-text").val();
            let instagram = $("#instagram-text").val();
            let twitter = $("#twitter-text").val();
            let youtube = $("#youtube-text").val();
            let linkedin = $("#linkedin-text").val();

            let data = {
                Facebook: facebook,
                Instagram: instagram,
                Twitter: twitter,
                Youtube: youtube,
                LinkedIn: linkedin,
                Dominio: nombreDominio
            };

            $.post("Form/addRedes", { formData: data },
                function () { console.log("redes actualizadas") }
            );

       
    } else {

        alert("completa la configuración");

        let data = {
            Dominio: nombreDominio
        };

        $.post("/Form/clearAgente", { formData: data },
            function () { console.log("success") });
    }


});

$(document).on('click', '.bContinuar', function (e) {

    let i = 0;
    while (i < totalAseguradoras) {

        let index = asegSel[i];
        $("#seleccion-2").find('.form-check').each(function () {

            if ($(this).attr("aseguradora-id") == index) {

               
                $(this).find('input:checked').each(function () {

                    let concat = $(this).val();

                    let data = {
                        Dominio_Page: nombreDominio,
                        Ramo: concat,
                        Aseguradora_1: logos[index - 1],
                        Campo: i
                    };

                    $.post("/Form/addAseguradora", { formData: data },
                        function () { console.log("se agrego a aseg " + concat) });
                      
                });
            }
        });

        i++;

    }

    $("#campo-ramos").find('.mesPrin').each(function () {

        let texto = $(this).val();

        let concat = $(this).attr("nombre-ramo");

        let data = {
            Dominio_Page: nombreDominio,
            Ramo: concat,
            Mensaje_1: texto
        };

        $.post("/Form/addMPrin", { formData: data },
            function () { console.log("meprin" + concat) });

    });

    $("#campo-ramos").find('.mesSec').each(function () {

        let texto = $(this).val();

        let concat = $(this).attr("nombre-ramo");

        let data = {
            Dominio_Page: nombreDominio,
            Ramo: concat,
            Mensaje_2: texto
        };

        $.post("/Form/addMSec", { formData: data },
            function () { console.log("mesec" + concat) });

    });

    $('#secnav').slideUp(function () { });

    $("div").find('.cont-element').each(function () {

        if ($(this).attr("nav-id") == 4) {

            $(this).show();
        } else
            $(this).hide();

    });

    $("div").find('.side-element').each(function () {

        if ($(this).attr("nav-id") == 4) {

            $(this).addClass("active1");
        } else
            $(this).removeClass("active1");

    });
});

$(document).on('click', '.secElement', function (e) { //controlador del dropdown de personalizar

    let posicion = $(this).attr("per-at");

    document.getElementById('per-at' + posicion).scrollIntoView({ behavior: "smooth" });

});

$(document).on('click', '.cnAsegur', function (e) {//con esto se controla el modal de seleccion de aseguradoras, aqui se esconde la seleccion y despliega la parte de asginar

    $("#selec-ase").hide();

    $("#asignar").show();

});

$(document).on('click', '.editarAsegura', function (e) {//con este se oculta la parte de asiginar y se muestra la seleccion

    $("#selec-ase").show();

    $("#asignar").hide();
});

$(document).on('click', '.deland', function (e) { // aqui se acciona el pop up de borrar

    let id = $(this).attr("ramo-id");

    $("#pub").find('.landlink').each(function () {

        if ($(this).attr("ramo-id") == id) {//se le da la clase target al wrapper para saber cual pagina se va a eliminar

            $(this).addClass("target");

        } else {

            $(this).removeClass("target");
        }

    });
});

$(document).on('click', '.keepplant', function (e) {

    $("#pub").find('.target').each(function () {

        $(this).removeClass("target");

    });

});

