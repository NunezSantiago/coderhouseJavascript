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



const generarData = async () => {
    const res = await fetch("celulares.json")
    const data = await res.json()
    let catalogo = []
    data.forEach((cel) => {
        catalogo.push(new Celular(cel.id, cel.marca, cel.modelo, cel.precio, cel.img))
    })
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
    localStorage.setItem("filtered", localStorage.getItem("catalogo"))
    mostrarCatalogoBrowser(JSON.parse(localStorage.getItem("catalogo")))
}

//Catalogo de productos
if(localStorage.getItem("catalogo") == undefined){
    generarData()
} else{
    localStorage.setItem("filtered", localStorage.getItem("catalogo"))
    mostrarCatalogoBrowser(JSON.parse(localStorage.getItem("catalogo")))
}

//Carrito de compras del usuario
if(localStorage.getItem("carrito") == undefined){
    let carrito = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Se utiliza principalmente para ordenar los elementos

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
let contrasena = document.getElementById("contrasena")

function ingresar(pwd){

    Swal.fire({
        title: 'Iniciando sesion',
        timer: 2000,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })

      setTimeout(() => {
        if(pwd == "1234"){
            window.location.href = "html/admin.html"
        } else {
            document.getElementById("contrasena").value = ""
            Swal.fire({
                title: "Contraseña invalida",
                icon: "error"
            })
        }
      }, 2000)
}

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
    Swal.fire({
        title: 'Compra realizada',
        text: 'Gracias por elegirnos!!',
        icon: 'success',
        confirmButtonText: 'Volver a la tienda'
    })
})

ingresarBtn.addEventListener("click", () => {
    ingresar(contrasena.value)
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

contrasena.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        ingresar(contrasena.value)
    }
})