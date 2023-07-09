//STORAGE

//Catalogo de productos
if(localStorage.getItem("catalogo") == undefined){
    localStorage.setItem("catalogo", JSON.stringify(generarData()))
}

//Carrito de compras del usuario
if(localStorage.getItem("carrito") == undefined){
    let carrito = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Se utiliza principalmente para ordenar los elementos
localStorage.setItem("filtered", localStorage.getItem("catalogo"))

mostrarCatalogoBrowser(JSONCelularParser(JSON.parse(localStorage.getItem("catalogo"))))


//EVENTOS

//evento del boton filtrar

let filtrarBtn = document.getElementById("filtrarBtn")

filtrarBtn.addEventListener("click", () => {
    filtrar()
})

//evento del boton limpiar

let limpiarBtn = document.getElementById("limpiarBtn")

limpiarBtn.addEventListener("click", () => {
    limpiarFiltros()
})

//Evento del dropdown ordenar

//ordenDropdown.value = ""
let ordenDropdown = document.getElementById("orden")

ordenDropdown.addEventListener("change", () => {
    ordenar(ordenDropdown.value)
})

//Evento del input de precio minimo

let precioMin = document.getElementById("precioMin")

precioMin.addEventListener("change", () => {
    let precioMax = document.getElementById("precioMax")
    if(precioMax.value == "" || precioMax.value < precioMin.value){
        precioMax.min = precioMin.value
        precioMax.value = precioMin.value
    }
    
})
//se puede agrgar el id guardando una variable con el ultimo y actualizarla cada vez que se agrega un elemento pero que no se modifique cuando se elimina

let carritoBtn = document.getElementById("carritoBtn")
carritoBtn.addEventListener("click", () => {
    mostrarCarrito()
})

let pagarBtn = document.getElementById("pagarBtn")
pagarBtn.addEventListener("click", () => {
    localStorage.setItem("carrito", JSON.stringify([]))
})

let ingresarBtn = document.getElementById("ingresarBtn")
ingresarBtn.addEventListener("click", () => {
    let pwd = document.getElementById("contrasena").value
    console.log(pwd)
    if(pwd == "1234"){
        window.location.href = "html/admin.html"
    } else {
        document.getElementById("contrasena").value = ""
    }
})

let buscarBtn = document.getElementById("buscarBtn")
buscarBtn.addEventListener("click", () => {
    busquedaGral()
})