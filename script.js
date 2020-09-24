var resultados = 0;

function onloadFunction() {
    document.getElementById("preguntados").style.display = "none";
    document.getElementById("preguntatres").style.display = "none";
    document.getElementById("preguntacuatro").style.display = "none";
    document.getElementById("preguntacinco").style.display = "none";
    document.getElementById("boton_resultado").style.display = "none";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("boton_retornar").style.display = "none";
}

function myFunctionAvanzarSegunda() {
    if ((null != document.getElementById("r_l_12") && document.getElementById("r_l_12").checked) ||
        (null != document.getElementById("r_e_12") && document.getElementById("r_e_12").checked)) {
        resultados = resultados + 1;
        console.log("resultado_1  " + resultados);
    }
    document.getElementById("preguntauno").style.display = "none";
    document.getElementById("preguntados").style.display = "block";
}

function myFunctionAvanzarTercera() {
    if ((null != document.getElementById("r_l_21") && document.getElementById("r_l_21").checked) ||
        (null != document.getElementById("r_e_21") && document.getElementById("r_e_21").checked)) {
        resultados = resultados + 1;
        console.log("resultado_2  " + resultados);
    }
    document.getElementById("preguntados").style.display = "none";
    document.getElementById("preguntatres").style.display = "block";
}

function myFunctionAvanzarCuarta() {
    if ((null != document.getElementById("r_l_31") && document.getElementById("r_l_31").checked) ||
        (null != document.getElementById("r_e_33") && document.getElementById("r_e_33").checked)) {
        resultados = resultados + 1;
        console.log("resultado_3  " + resultados);
    }
    document.getElementById("preguntatres").style.display = "none";
    document.getElementById("preguntacuatro").style.display = "block";
}

function myFunctionAvanzarQuinta() {
    if ((null != document.getElementById("r_l_43") && document.getElementById("r_l_43").checked) ||
        (null != document.getElementById("r_e_42") && document.getElementById("r_e_42").checked)) {
        resultados = resultados + 1;
        console.log("resultado_4  " + resultados);
    }
    document.getElementById("preguntacuatro").style.display = "none";
    document.getElementById("preguntacinco").style.display = "block";
    document.getElementById("boton_resultado").style.display = "block";
}

function myFunctionAvanzarSexta() {
    if ((null != document.getElementById("r_l_53") && document.getElementById("r_l_53").checked) ||
        (null != document.getElementById("r_e_51") && document.getElementById("r_e_51").checked)) {
        resultados = resultados + 1;

    }
    document.getElementById("preguntacinco").style.display = "none";
    document.getElementById("boton_resultado").style.display = "none";
    console.log("resultado_5  " + resultados);
    document.getElementById("resultado").style.display = "block";
    document.getElementById("boton_retornar").style.display = "block";
    document.getElementById("resultado").innerHTML = "resultados: " + resultados;
}


function myFunctionAtras() {

    document.getElementById("preguntauno").style.display = "block";
    document.getElementById("preguntados").style.display = "none";
}

function myFunctionAtras2() {
    document.getElementById("preguntauno").style.display = "block";
    document.getElementById("preguntados").style.display = "none";
}

function myFunctionAtras3() {
    document.getElementById("preguntados").style.display = "block";
    document.getElementById("preguntatres").style.display = "none";
}

function myFunctionAtras4() {
    document.getElementById("preguntatres").style.display = "block";
    document.getElementById("preguntacuatro").style.display = "none";

}

function myFunctionAtras5() {
    document.getElementById("preguntacuatro").style.display = "block";
    document.getElementById("preguntacinco").style.display = "none";
    document.getElementById("boton_resultado").style.display = "none";

}

function retornar_categoria() {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var usuario_url = url.searchParams.get("nombre");
    location.href = "/pantalla_categoria.html?nombre=" + usuario_url
}


function pantalla_logica() {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var usuario_url = url.searchParams.get("nombre");
    location.href = "/pantalla_logica.html?nombre=" + usuario_url
}

function pantalla_educacion() {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var usuario_url = url.searchParams.get("nombre");
    location.href = "/pantalla_educacion.html?nombre=" + usuario_url
}