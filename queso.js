export function crearQueso() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "queso";
    div.textContent = "Queso";
    main.appendChild(div);
}