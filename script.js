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
    document.getElementById("atras").style.display = "none";
    document.getElementById("atras1").style.display = "none";
    document.getElementById("atras2").style.display = "none";
    document.getElementById("atras3").style.display = "none";
    document.getElementById("avanzar").style.display = "none";
    document.getElementById("avanzar1").style.display = "none";
    document.getElementById("avanzar2").style.display = "none";
    document.getElementById("avanzar3").style.display = "none";
    document.getElementById("preguntauno").style.display = "block";
    document.getElementById("preguntados").style.display = "block";
    document.getElementById("preguntatres").style.display = "block";
    document.getElementById("preguntacuatro").style.display = "block";
    document.getElementById("preguntacinco").style.display = "block";
    document.getElementById("boton_resultado").style.display = "none";
    console.log("resultado_5  " + resultados);
    document.getElementById("resultado").style.display = "block";
    document.getElementById("boton_retornar").style.display = "block";
    document.getElementById("resultado").innerHTML = "resultados: " + resultados;
    switch (resultados) {
        case 0:
            alert('Ganar ya no es solo el resultado, es parte del proceso');
            break;
        case 1:
            alert('Los campeones siguen jugando hasta que lo hacen bien');
            break;
        case 2:
            alert('Los ganadores hacen lo que los perdedores no. Seguir intentando');
            break;
        case 3:
            alert('Los ganadores piensan constantemente en términos de “yo puedo, lo haré y lo soy”.');
            break;
        case 4:
            alert('No te rindas. Sufre ahora y vive el resto de tu vida como un campeón');
            break;
        default:
            alert('Ganar no siempre significa ser el primero. Ganar significa que lo estás haciendo mejor de lo que nunca antes lo has hecho.FELICIDADES');
    }

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