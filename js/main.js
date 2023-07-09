//Opciones usuario
/*
-Ver productos
-Busqueda general
-Filtrar por Marca Modelo y Precio
-Agregar productos al carrito
-Ver productos en el carrito
-Pagar productos en el carrito
-Eliminar productos del carrito
*/

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

//VARIABLES

let filtrarBtn = document.getElementById("filtrarBtn")
let limpiarBtn = document.getElementById("limpiarBtn")
let ordenDropdown = document.getElementById("orden")
let precioMin = document.getElementById("precioMin")
let carritoBtn = document.getElementById("carritoBtn")
let pagarBtn = document.getElementById("pagarBtn")
let ingresarBtn = document.getElementById("ingresarBtn")
let buscarBtn = document.getElementById("buscarBtn")
let busqueda = document.getElementById("busqueda")
let marca = document.getElementById("marca")
let modelo = document.getElementById("modelo")
let precioMax = document.getElementById("precioMax")

//EVENTOS

//evento del boton filtrar

filtrarBtn.addEventListener("click", () => {
    filtrar()
})

//evento del boton limpiar

limpiarBtn.addEventListener("click", () => {
    limpiarFiltros()
})

//Evento del dropdown ordenar

ordenDropdown.addEventListener("change", () => {
    ordenar(ordenDropdown.value)
})

//Evento del input de precio minimo

precioMin.addEventListener("change", () => {
    if(precioMax.value == "" || precioMax.value < precioMin.value){
        precioMax.min = precioMin.value
        precioMax.value = precioMin.value
    }
})

carritoBtn.addEventListener("click", () => {
    mostrarCarrito()
})

pagarBtn.addEventListener("click", () => {
    localStorage.setItem("carrito", JSON.stringify([]))
})

ingresarBtn.addEventListener("click", () => {
    let pwd = document.getElementById("contrasena").value
    console.log(pwd)
    if(pwd == "1234"){
        window.location.href = "html/admin.html"
    } else {
        document.getElementById("contrasena").value = ""
        Toastify({
            text: "Contraseña incorrecta",
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
})

buscarBtn.addEventListener("click", () => {
    busquedaGral()
})

//Eventos buscar al hacer ENTER

busqueda.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        busquedaGral()
    }
})

marca.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        filtrar()
    }
})

modelo.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        filtrar()
    }
})

precioMin.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        filtrar()
    }
})

precioMax.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        filtrar()
    }
})