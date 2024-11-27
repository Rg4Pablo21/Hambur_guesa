export function crearPanSuperior() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "pan-superior";
    div.textContent = "Pan Superior";
    main.appendChild(div);
}
