function resultado_educacion() {
    var p1, p2, p3, p4, p5, nota;

    <!-- 1ª pregunta -->
    if (document.getElementById("p12").checked == true) {
        p1 = 1;
    }
    if (p1 == 1) {
        document.querySelectorAll(".pregunta1")[1].style.color = "#00FF00";
    } else {
        p1 = 0;
    }
    <!-- 2ª pregunta -->
    if (document.getElementById("p21").checked == true) {
        p2 = 1;
    }
    if (p2 == 1) {
        document.querySelectorAll(".pregunta2")[0].style.color = "#00FF00";
    } else {
        p2 = 0;
    }
    <!-- 3ª pregunta -->
    if (document.getElementById("p33").checked == true) {
        p3 = 1;
    }
    if (p3 == 1) {
        document.querySelectorAll(".pregunta3")[2].style.color = "#00FF00";
    } else {
        p3 = 0;
    }
    <!-- 4ª pregunta -->
    if (document.getElementById("p42").checked == true) {
        p4 = 1;
    }
    if (p4 == 1) {
        document.querySelectorAll(".pregunta4")[1].style.color = "#00FF00";
    } else {
        p4 = 0;
    }
    <!-- 5ª pregunta -->
    if (document.getElementById("p51").checked == true) {
        p5 = 1;
    }
    if (p5 == 1) {
        document.querySelectorAll(".pregunta5")[0].style.color = "#00FF00";
    } else {
        p5 = 0;
    }

    nota = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultado").innerHTML = "Aciertos: " + nota;
    //  rs = confirm("C o n t i n u a r . . .") CREAR UN ALERT;
    rs = true;
    if (rs == false) {
        document.forms[0].reset();
        location.reload();
    }
}

function resultado_logica() {
    var p1, p2, p3, p4, p5, nota;

    <!-- 1ª pregunta -->
    if (document.getElementById("p12").checked == true) {
        p1 = 1;
    }
    if (p1 == 1) {
        document.querySelectorAll(".pregunta1")[1].style.color = "#00FF00";
    } else {
        p1 = 0;
    }
    <!-- 2ª pregunta -->
    if (document.getElementById("p21").checked == true) {
        p2 = 1;
    }
    if (p2 == 1) {
        document.querySelectorAll(".pregunta2")[0].style.color = "#00FF00";
    } else {
        p2 = 0;
    }
    <!-- 3ª pregunta -->
    if (document.getElementById("p31").checked == true) {
        p3 = 1;
    }
    if (p3 == 1) {
        document.querySelectorAll(".pregunta3")[0].style.color = "#00FF00";
    } else {
        p3 = 0;
    }
    <!-- 4ª pregunta -->
    if (document.getElementById("p43").checked == true) {
        p4 = 1;
    }
    if (p4 == 1) {
        document.querySelectorAll(".pregunta4")[2].style.color = "#00FF00";
    } else {
        p4 = 0;
    }
    <!-- 5ª pregunta -->
    if (document.getElementById("p53").checked == true) {
        p5 = 1;
    }
    if (p5 == 1) {
        document.querySelectorAll(".pregunta5")[2].style.color = "#00FF00";
    } else {
        p5 = 0;
    }

    nota = p1 + p2 + p3 + p4 + p5;
    document.getElementById("resultado").innerHTML = "Aciertos: " + nota;
    //  rs = confirm("C o n t i n u a r . . .") CREAR UN ALERT;
    rs = true;
    if (rs == false) {
        document.forms[0].reset();
        location.reload();
    }
}