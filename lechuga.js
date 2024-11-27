export function crearLechuga() {
    let main = document.querySelector("main");
    let div = document.createElement("div");
    div.className = "lechuga";
    div.textContent = "Lechuga";
    main.appendChild(div);
}
