const boton = document.getElementById("btnBienvenida");
const inputNombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        resultado.textContent = "Debe ingresar su nombre para continuar.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = `Bienvenido/a ${nombre}. Gracias por visitar nuestro centro educativo.`;
    resultado.style.color = "green";
});
