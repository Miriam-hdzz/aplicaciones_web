const boton = document.getElementById("mi_boton");

boton.addEventListener("click", ()=> {
        boton.textContent = "¡Sii Funciona!";
        boton.style.backgroundColor = "pinck";

        console.log("Se hizo clikk en el boton a las: " +new Date().toLocaleTimeString());
    }
);
