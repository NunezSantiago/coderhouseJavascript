/* Notas proxima entrega
-Mejorar maquetado
-Tamaño fotos
*/

class celular{
    constructor(id, marca, modelo, precio){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

    toString(){
        return `${this.id}: ${this.marca} ${this.modelo} Precio: U$S${this.precio}`
    }

    //las imagenes de cada celular se almacenan en: img/celulares/marca/modelo.webp
    getImgUrl(){
        return `${this.marca.toLowerCase()}/${this.modelo.toLowerCase().replaceAll(" ", "_")}.webp`
    }
}
//cantidad de celulares: 37
//Rango de precios 139 - 1849
function generarData(){
    let catalogo = []
    catalogo.push(new celular(0, "Apple", "IPhone 11", 628))
    catalogo.push(new celular(1, "Apple", "IPhone 12", 930))
    catalogo.push(new celular(2, "Apple", "IPhone 13", 1188))
    catalogo.push(new celular(3, "Apple", "IPhone 13 Mini", 995))
    catalogo.push(new celular(4, "Apple", "IPhone 13 Pro", 1344))
    catalogo.push(new celular(5, "Apple", "IPhone 13 Pro Max", 1699))
    catalogo.push(new celular(6, "Apple", "IPhone 14", 1299))
    catalogo.push(new celular(7, "Apple", "IPhone 14 Pro", 1399))
    catalogo.push(new celular(8, "Apple", "IPhone 14 Pro Max", 1849))
    catalogo.push(new celular(9, "Google", "Pixel 5", 199))
    catalogo.push(new celular(10, "Google", "Pixel 6", 397))
    catalogo.push(new celular(11, "Google", "Pixel 6 Pro", 485))
    catalogo.push(new celular(12, "Google", "Pixel 7", 649))
    catalogo.push(new celular(13, "Google", "Pixel 7 Pro", 899))
    catalogo.push(new celular(14, "Google", "Pixel 7a", 509))
    catalogo.push(new celular(15, "Motorola", "Edge 30 Fusion", 499))
    catalogo.push(new celular(16, "Motorola", "Edge 30 Neo", 299))
    catalogo.push(new celular(17, "Motorola", "Moto E40", 129))
    catalogo.push(new celular(18, "Samsung", "Galaxy A34", 259))
    catalogo.push(new celular(19, "Samsung", "Galaxy A54", 399))
    catalogo.push(new celular(20, "Samsung", "Galaxy S22", 729))
    catalogo.push(new celular(21, "Samsung", "Galaxy S22 Plus", 866))
    catalogo.push(new celular(22, "Samsung", "Galaxy S22 Ultra", 1099))
    catalogo.push(new celular(23, "Samsung", "Galaxy S23", 859))
    catalogo.push(new celular(24, "Samsung", "Galaxy S23 Plus", 999))
    catalogo.push(new celular(25, "Samsung", "Galaxy S23 Ultra", 1199))
    catalogo.push(new celular(26, "Vivo", "Y20", 139))
    catalogo.push(new celular(27, "Vivo", "Y33S", 229))
    catalogo.push(new celular(28, "Xiaomi", "Mi 12", 542))
    catalogo.push(new celular(29, "Xiaomi", "Mi 12 Pro", 679))
    catalogo.push(new celular(30, "Xiaomi", "Mi 13", 1095))
    catalogo.push(new celular(31, "Xiaomi", "Mi 13 Lite", 526))
    catalogo.push(new celular(32, "Xiaomi", "Mi 13 Pro", 1534))
    catalogo.push(new celular(33, "Xiaomi", "Redmi Note 11 Pro Plus", 310))
    catalogo.push(new celular(34, "Xiaomi", "Redmi Note 12", 154))
    catalogo.push(new celular(35, "Xiaomi", "Redmi Note 12 Pro", 320))
    catalogo.push(new celular(36, "Xiaomi", "Redmi Note 12 Pro Plus", 365))
    return catalogo
}

//Mostrar el catalogo en la consola
function mostrarCatalogoConsola(arregloCelulares){
    arregloCelulares.forEach((cel) => {
        console.log(cel.toString())
    })
}

//Mostrar catalogo en el browser. DOM
function mostrarCatalogoBrowser(arregloCelulares){
    let divCatalogo = document.getElementById("catalogo")
    arregloCelulares.forEach((cel) => {
        let nuevoCelular = document.createElement("div")
        nuevoCelular.className = "col-12 col-md-6 col-lg-4"
        nuevoCelular.innerHTML =
            `<div id="${cel.id}" class="card" style="width: 18rem;">
                <img src="img/celulares/${cel.getImgUrl()}" class="card-img-top" alt="${cel.toString()}">
                <div class="card-body">
                    <h5 class="card-title">${cel.marca}</h5>
                    <p class="card-text">${cel.modelo}</p>
                    <p class="card-text">U$S${cel.precio}</p>
                </div>
            </div>`        
        divCatalogo.appendChild(nuevoCelular)
    })
}

//Funcio auxiliar para ordenar un arreglo de celulares de forma ascendente en base a su precio
function ordenPrecioAscendente(arregloCelulares){
    arregloCelulares.sort((a, b) => a.precio - b.precio)
}

//Funcio auxiliar para ordenar un arreglo de celulares de forma descendente en base a su precio
function ordenPrecioDescendente(arregloCelulares){
    arregloCelulares.sort((a, b) => b.precio - a.precio)
}

//Pregunta al usuario como desea ordenar el arreglo.
//1- llama a ordenPrecioAscendente
//1- llama a ordenPrecioDescendente
//Otro valor - No hace nada
function ordenarPrecio(arregloCelulares){
    let opc = parseInt(prompt(`Como desea ordenar?
    1-Ascendente
    2-Descendente`))
    let toOrder = [].concat(arregloCelulares)
    switch(opc){
        case 1:
            ordenPrecioAscendente(toOrder)
            break
        case 2:
            ordenPrecioDescendente(toOrder)
            break
        default:
            alert("Opcion invalida")
    }
    return toOrder
}

//Voy a pedir 2 cotas.
function filtrarPrecio(arregloCelulares){
    let precioMin = parseInt(prompt("Ingrese el precio minimo:"))
    let precioMax = parseInt(prompt("Ingrese el precio maximo:"))
    return arregloCelulares.filter((cel) => cel.precio >= precioMin && cel.precio <= precioMax)
}

//Funcion auxiliar para encontrar un celular dado un ID. 
//Se utiliza para agragar y quitar elementos del carrito
function buscarId(arregloCelulares){
    let id = parseInt(prompt("Indique la id que desea buscar:"))
    return arregloCelulares.find((cel) => cel.id == id)
}

//Dado una marca devuelve un arreglo con todos los celulares de dicha marca
function filtrarMarca(arregloCelulares){
    let marca = prompt("Ingrese la marca que desea buscar:")
    return arregloCelulares.filter((cel) => cel.marca == marca)
}

//Dado un modelo devuelve dicho celular
function buscarModelo(arregloCelulares){
    let modelo = prompt("Ingrese el modelo que desea buscar:")
    return arregloCelulares.filter((cel) => cel.modelo == modelo)
}

//Saca un elemento del carrito dado su id
function quitarDelCarrito(arregloCelulares){
    let indice = arregloCelulares.indexOf(buscarId(arregloCelulares))
    if(indice == -1){
        alert("El elemento no se encuentra en el carrito")
    }else{
        arregloCelulares.splice(indice, 1)
    }
}

//Agrega un elemento al carrito dado su id
function agregarAlCarrito(arregloCelulares){
    return buscarId(arregloCelulares)
}

function mostrarCarrito(carrito){
    mostrarCatalogoConsola(carrito)
}

let stock = generarData()
let onDisplay = stock
mostrarCatalogoBrowser(onDisplay)
mostrarCatalogoConsola(onDisplay)
let carrito = []
let opc = 1
do{
    opc = parseInt(prompt(`Ingrese una opcion:
    1) Agregar al carrito
    2) Quitar del carrito
    3) Ordenar por Precio
    4) Filtrar por precio
    5) Filtrar por marca
    6) Filtrar por modelo
    7) Remover filtros
    8) Mostrar carrito
    9) Limpiar carrito
    0) Salir`))

    switch(opc){
        case 1:
            carrito.push(agregarAlCarrito(stock))
            break
        case 2:
            quitarDelCarrito(carrito)
            break
        case 3:
            onDisplay = ordenarPrecio(onDisplay)
            break
        case 4:
            onDisplay = filtrarPrecio(onDisplay)
            break
        case 5:
            onDisplay = filtrarMarca(onDisplay)
            break
        case 6:
            onDisplay = filtrarModelo(onDisplay)
            break
        case 7:
            onDisplay = stock
            break
        case 8:
            mostrarCarrito(carrito)
            break
        case 9:
            carrito = []
            break
        case 0:
            alert("Gracias por elegirnos")
            break
        default:
            alert("Opcion invalida, por favor ingrese una presente en el menu")
    }
}while(opc !== 0)
