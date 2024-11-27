export function crearCarne() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "carne";
    div.textContent = "Carne";
    main.appendChild(div);
}
