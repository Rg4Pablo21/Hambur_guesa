export function crearcebolla(){
    let main = document.querySelector("main");
    let div = document.createElement("div")
    div.className = "cebolla"
    div.textContent = "Cebolla"
    main.appendChild(div)
}