//Opciones admin
/*
-Agregar Celular
-Eliminar celular
Reinicar el storage
*/

//FUNCIONES

function agregarCatalogo(){
    let catalogo = JSON.parse(localStorage.getItem("catalogo"))

    let id = catalogo.length == 0 ? 0 : catalogo[catalogo.length -1].id + 1
    let marca = document.getElementById("marcaNuevo").value
    let modelo = document.getElementById("modeloNuevo").value
    let precio = parseInt(document.getElementById("precioNuevo").value)
    let existe = catalogo.find((cel) => cel.modelo.toLowerCase() == modelo.toLowerCase())

    if(marca != "" && modelo != "" && !isNaN(precio) && !existe){
        let nuevoCelular = new Celular(id, marca, modelo, precio,`default.webp`)
        catalogo.push(nuevoCelular)
        localStorage.setItem("catalogo", JSON.stringify(catalogo))
        Toastify({
            text: "Producto agregado",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
          }).showToast();
    } else if(existe){
        Toastify({
            text: "Este modelo ya esta registrado",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ED213A, #93291E)",
            },
            onClick: function(){}
          }).showToast();
    } else{
        Toastify({
            text: "Ingrese la informacion correspondiente",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ED213A, #93291E)",
            },
            onClick: function(){}
          }).showToast();
    }
}

function buscarID(){
    let divConfirmar = document.getElementById("confirmar")
    divConfirmar.innerHTML = ``
    let catalogo = JSONCelularParser(JSON.parse(localStorage.getItem("catalogo")))
    let id = parseInt(document.getElementById("idEliminar").value)
    let celular = !isNaN(id) ? catalogo.find((cel) => cel.id == id) : undefined 
    
    if(celular != undefined){
        let mostrarCelular = document.createElement("div")
        mostrarCelular.className = "m-3"
        mostrarCelular.innerHTML =`
        <div class="card mb-3" style="max-width: 450px;">
        <div class="row g-0">
            <div class="col-md-3">
                <img src="../img/celulares/${celular.img}" class="card-img-top" alt="${celular.toString()}">
            </div>
            <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${celular.marca}</h5>
                    <p class="card-text">${celular.modelo}</p>
                    <p class="card-text">U$S${celular.precio}</p>
                </div>
            </div>
        </div>
    </div>
    `
        divConfirmar.appendChild(mostrarCelular)
    } else{
        Toastify({
            text: "Producto inexistente",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ED213A, #93291E)",
            },
            onClick: function(){}
          }).showToast();
    }
}

function eliminarCatalogo(){
    let catalogo = JSON.parse(localStorage.getItem("catalogo"))
    let id = parseInt(document.getElementById("idEliminar").value)
    let celular = !isNaN(id) ? catalogo.find((cel) => cel.id == id) : undefined 
    
    if(celular != undefined){
        let celularIndex = catalogo.indexOf(celular)
        catalogo.splice(celularIndex, 1)
        localStorage.setItem("catalogo", JSON.stringify(catalogo))
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
          }).showToast();

          localStorage.setItem("carrito", JSON.stringify(JSON.parse(localStorage.getItem("carrito")).filter((elem) => elem.id != id)))

    } else{
        Toastify({
            text: "Producto inexistente",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ED213A, #93291E)",
            },
            onClick: function(){}
          }).showToast();
    }

    let divConfirmar = document.getElementById("confirmar")
    divConfirmar.innerHTML = ``
    document.getElementById("idEliminar").value = ""
}

//VARIABLES

let agregarBtn = document.getElementById("agregarBtn")
let mostrarBtn = document.getElementById("mostrarBtn")
let eliminarBtn = document.getElementById("eliminarBtn")
let resetStorageBtn = document.getElementById("resetStorageBtn")

//DECLARACION DE EVENTOS

agregarBtn.addEventListener("click", () => {
    agregarCatalogo()
})


mostrarBtn.addEventListener("click", () => {
    buscarID()
})


eliminarBtn.addEventListener("click", () => {
    eliminarCatalogo()
})

const resetCatalogo = async () => {
    const res = await fetch("../celulares.json")
    const data = await res.json()
    let catalogo = []
    data.forEach((cel) => {
        catalogo.push(new Celular(cel.id, cel.marca, cel.modelo, cel.precio, cel.img))
    })
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
    localStorage.setItem("filtered", localStorage.getItem("catalogo"))
}


resetStorageBtn.addEventListener("click", () => {
    resetCatalogo()
    localStorage.setItem("carrito", JSON.stringify([]))
    window.location.reload();
})
