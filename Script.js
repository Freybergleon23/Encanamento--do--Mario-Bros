const form = document.querySelector(".folmulario")
const background = document.querySelector(".mascara-form")

function mostrarFormulario() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    background.style.visibility = "visible";
}

function ocultarFormulario() {
    form.style.left = "-300px";
    form.style.transform = "transtaleX(0)";
    background.style.visibility = "hidden";
}
