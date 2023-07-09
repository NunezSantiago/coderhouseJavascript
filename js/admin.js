function agregarCatalogo(){
    let catalogo = JSON.parse(localStorage.getItem("catalogo"))

    let id = catalogo.length == 0 ? 0 : catalogo[catalogo.length -1].id + 1
    let marca = document.getElementById("marcaNuevo").value
    let modelo = document.getElementById("modeloNuevo").value
    let precio = parseInt(document.getElementById("precioNuevo").value)

    if(marca != "" && modelo != "" && !isNaN(precio)){
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

let agregarBtn = document.getElementById("agregarBtn")
agregarBtn.addEventListener("click", () => {
    agregarCatalogo()
})

let mostrarBtn = document.getElementById("mostrarBtn")
mostrarBtn.addEventListener("click", () => {
    buscarID()
})

let eliminarBtn = document.getElementById("eliminarBtn")
eliminarBtn.addEventListener("click", () => {
    eliminarCatalogo()
})

