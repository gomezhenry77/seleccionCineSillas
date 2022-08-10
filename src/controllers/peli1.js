let productos=[
    {
        sigla:"C1"
    },
    {
        sigla:"C2"
    },
    {
        sigla:"C3"
    },
    {
        sigla:"C4"
    },
    {
        sigla:"B1"
    },
    {
        sigla:"B2"
    },
    {
        sigla:"B3"
    },
    {
        sigla:"B4"
    },
    {
        sigla:"A1"
    },
    {
        sigla:"A2"
    },
    {
        sigla:"A3"
    },
    {
        sigla:"A4"
    },
]

let fila=document.getElementById("fila")
let teatro=document.getElementById("teatro")

productos.forEach(function(producto){

    let silla=document.createElement("div")
    silla.classList.add("card", "bg-info", "border", "text-center","h-25", "w-25")

    let sigla=document.createElement("h2")
    sigla.classList.add("fw-bold")
    sigla.textContent=producto.sigla

    let estado=document.createElement("h5")
    estado.classList.add("fw-bold")
    estado.textContent="disponible"
    

    silla.appendChild(sigla)
    silla.appendChild(estado)
    fila.appendChild(silla)
    teatro.appendChild(fila)

    silla.addEventListener("click",function(){
        silla.classList.add("bg-danger")
        estado.textContent="RESERVADA"
        estado.classList.add("text-light")
    })
})