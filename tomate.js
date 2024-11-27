export function crearTomate() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "tomate";
    div.textContent = "Tomate";
    main.appendChild(div);
}
