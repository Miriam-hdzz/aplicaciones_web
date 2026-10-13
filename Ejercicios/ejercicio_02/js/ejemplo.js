const boton = document.getElementById("mi_boton");

boton.addEventListener("click", () => {
    boton.textContent = "¡Sí funciona!";
    boton.style.backgroundColor = "pink";
    console.log("Se hizo clic en el botón a las: " + new Date().toLocaleTimeString());
});
