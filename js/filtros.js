//Funciones que se utilizan para filtrar la informacion

function ordenAlfabetico(array){
    array.sort(function (a, b) {
        if (a.modelo < b.modelo) {
            return -1
        }
        if (a.modelo > b.modelo) {
            return 1
        }
        return 0
    })
}

function filtrar(){
    let marca = document.getElementById("marca").value.toLowerCase()
    let modelo = document.getElementById("modelo").value.toLowerCase()
    let precioMin = parseInt(document.getElementById("precioMin").value)
    let precioMax = parseInt(document.getElementById("precioMax").value)
    let catalogo = JSONCelularParser(JSON.parse(localStorage.getItem("catalogo")))

    document.getElementById("orden").value = ""

    if(marca != ""){
        catalogo = catalogo.filter((cel) => cel.marca.toLowerCase().includes(marca))
    }

    if(modelo != ""){
        catalogo = catalogo.filter((cel) => cel.modelo.toLowerCase().includes(modelo))
    }

    if(!isNaN(precioMin) && !isNaN(precioMax)){
        catalogo = catalogo.filter((cel) => cel.precio >= precioMin && cel.precio <= precioMax)
    } else {
        if(!isNaN(precioMin)){
            catalogo = catalogo.filter((cel) => cel.precio >= precioMin)
        }
        
        if(!isNaN(precioMax)){
            catalogo = catalogo.filter((cel) => cel.precio <= precioMax)
        }
    }

    localStorage.setItem("filtered", JSON.stringify(catalogo))
    limpiarDisplay()
    mostrarCatalogoBrowser(catalogo)
}

function busquedaGral(){
    let busqueda = document.getElementById("busqueda").value.toLowerCase()
    let catalogo = JSONCelularParser(JSON.parse(localStorage.getItem("catalogo")))

    console.log(catalogo[0].toString())

    catalogo = catalogo.filter((cel) => cel.toString().toLowerCase().includes(busqueda))

    localStorage.setItem("filtered", JSON.stringify(catalogo))
    limpiarDisplay()
    mostrarCatalogoBrowser(catalogo)
}

function limpiarFiltros(){
    limpiarDisplay()
    mostrarCatalogoBrowser(JSONCelularParser(JSON.parse(localStorage.getItem("catalogo"))))
    localStorage.setItem("filtered", localStorage.getItem("catalogo"))
    document.getElementById("marca").value = ""
    document.getElementById("modelo").value = ""
    document.getElementById("precioMin").value = ""
    document.getElementById("precioMax").value = ""
    document.getElementById("orden").value = ""
}

function ordenar(orden){
    let catalogo = JSON.parse(localStorage.getItem("filtered"))

    if(orden == "ascendente"){
        catalogo.sort((a, b) => a.precio - b.precio)
    } else if(orden == "descendente"){
        catalogo.sort((a, b) => b.precio - a.precio)
    } else if(orden == "alfabetico"){
        ordenAlfabetico(catalogo)
    }

    limpiarDisplay()
    mostrarCatalogoBrowser(catalogo)
}