document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Funcionando Correctamente")
})
function cambioStroke(){
    if(document.getElementById("sobreMi").style.display === "block"){
        document.getElementById("SVGsobreMi").style.stroke = "beige"
    }else{
        document.getElementById("SVGsobreMi").style.stroke = "#000000"
    }
    if(document.getElementById("cualidades").style.display === "block"){
        document.getElementById("SVGcualidades").style.stroke =
            "beige"
    }else{
        document.getElementById("SVGcualidades").style.stroke =
            "#000000"
    }
    if(document.getElementById("conocimientos").style.display === "block"){
        document.getElementById("SVGconocimientos").style.stroke =
            "beige"
    }else{
        document.getElementById("SVGconocimientos").style.stroke =
            "#000000"
    }
    if(document.getElementById("proyectos").style.display === "block"){
        document.getElementById("SVGproyectos").style.stroke =
            "beige"
    }else{
        document.getElementById("SVGproyectos").style.stroke =
            "#000000"
    }
    if(document.getElementById("contacto").style.display === "block"){
        document.getElementById("SVGcontacto").style.stroke =
            "beige"
    }else{
        document.getElementById("SVGcontacto").style.stroke = "#000000";
    }
}


function sobreMi() {
    console.log("Sobre Mi Funcionando Correctamente")
    document.getElementById("sobreMi").style.display = "block"
    document.getElementById("cualidades").style.display = "none"
    document.getElementById("conocimientos").style.display = "none"
    document.getElementById("proyectos").style.display = "none"
    document.getElementById("contacto").style.display = "none"
    cambioStroke()
}

function cualidades() {
    console.log("cualidades Funcionando Correctamente")
    document.getElementById("sobreMi").style.display = "none"
    document.getElementById("cualidades").style.display = "block"
    document.getElementById("conocimientos").style.display = "none"
    document.getElementById("proyectos").style.display = "none"
    document.getElementById("contacto").style.display = "none"
    cambioStroke()
}

function conocimientos() {
    console.log("Conocimiento Funcionando Correctamente")
    document.getElementById("sobreMi").style.display = "none"
    document.getElementById("cualidades").style.display = "none"
    document.getElementById("conocimientos").style.display = "block"
    document.getElementById("proyectos").style.display = "none"
    document.getElementById("contacto").style.display = "none"
    cambioStroke()
}

function proyectos() {
    console.log("Proyectos Funcionando Correctamente")
    document.getElementById("sobreMi").style.display = "none"
    document.getElementById("cualidades").style.display = "none"
    document.getElementById("conocimientos").style.display = "none"
    document.getElementById("proyectos").style.display = "block"
    document.getElementById("contacto").style.display = "none"
    cambioStroke()
}

function contacto() {
    console.log("Contacto Funcionando Correctamente")
    document.getElementById("sobreMi").style.display = "none"
    document.getElementById("cualidades").style.display = "none"
    document.getElementById("conocimientos").style.display = "none"
    document.getElementById("proyectos").style.display = "none"
    document.getElementById("contacto").style.display = "block"
    cambioStroke()
}


