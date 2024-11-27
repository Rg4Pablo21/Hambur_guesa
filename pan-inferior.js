export function crearPanInferior() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "pan-inferior";
    div.textContent = "Pan Inferior";
    main.appendChild(div);
}
