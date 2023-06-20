/* Notas proxima entrega
-Mejorar maquetado
*/

class Celular{
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
    catalogo.push(new Celular(0, "Apple", "IPhone 11", 628))
    catalogo.push(new Celular(1, "Apple", "IPhone 12", 930))
    catalogo.push(new Celular(2, "Apple", "IPhone 13", 1188))
    catalogo.push(new Celular(3, "Apple", "IPhone 13 Mini", 995))
    catalogo.push(new Celular(4, "Apple", "IPhone 13 Pro", 1344))
    catalogo.push(new Celular(5, "Apple", "IPhone 13 Pro Max", 1699))
    catalogo.push(new Celular(6, "Apple", "IPhone 14", 1299))
    catalogo.push(new Celular(7, "Apple", "IPhone 14 Pro", 1399))
    catalogo.push(new Celular(8, "Apple", "IPhone 14 Pro Max", 1849))
    catalogo.push(new Celular(9, "Google", "Pixel 5", 199))
    catalogo.push(new Celular(10, "Google", "Pixel 6", 397))
    catalogo.push(new Celular(11, "Google", "Pixel 6 Pro", 485))
    catalogo.push(new Celular(12, "Google", "Pixel 7", 649))
    catalogo.push(new Celular(13, "Google", "Pixel 7 Pro", 899))
    catalogo.push(new Celular(14, "Google", "Pixel 7a", 509))
    catalogo.push(new Celular(15, "Motorola", "Edge 30 Fusion", 499))
    catalogo.push(new Celular(16, "Motorola", "Edge 30 Neo", 299))
    catalogo.push(new Celular(17, "Motorola", "Moto E40", 129))
    catalogo.push(new Celular(18, "Samsung", "Galaxy A34", 259))
    catalogo.push(new Celular(19, "Samsung", "Galaxy A54", 399))
    catalogo.push(new Celular(20, "Samsung", "Galaxy S22", 729))
    catalogo.push(new Celular(21, "Samsung", "Galaxy S22 Plus", 866))
    catalogo.push(new Celular(22, "Samsung", "Galaxy S22 Ultra", 1099))
    catalogo.push(new Celular(23, "Samsung", "Galaxy S23", 859))
    catalogo.push(new Celular(24, "Samsung", "Galaxy S23 Plus", 999))
    catalogo.push(new Celular(25, "Samsung", "Galaxy S23 Ultra", 1199))
    catalogo.push(new Celular(26, "Vivo", "Y20", 139))
    catalogo.push(new Celular(27, "Vivo", "Y33S", 229))
    catalogo.push(new Celular(28, "Xiaomi", "Mi 12", 542))
    catalogo.push(new Celular(29, "Xiaomi", "Mi 12 Pro", 679))
    catalogo.push(new Celular(30, "Xiaomi", "Mi 13", 1095))
    catalogo.push(new Celular(31, "Xiaomi", "Mi 13 Lite", 526))
    catalogo.push(new Celular(32, "Xiaomi", "Mi 13 Pro", 1534))
    catalogo.push(new Celular(33, "Xiaomi", "Redmi Note 11 Pro Plus", 310))
    catalogo.push(new Celular(34, "Xiaomi", "Redmi Note 12", 154))
    catalogo.push(new Celular(35, "Xiaomi", "Redmi Note 12 Pro", 320))
    catalogo.push(new Celular(36, "Xiaomi", "Redmi Note 12 Pro Plus", 365))
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
//2- llama a ordenPrecioDescendente
//Otro valor - No hace nada
function ordenarPrecio(arregloCelulares){
    let opc = parseInt(prompt(`Como desea ordenar?
    1-Ascendente
    2-Descendente`))
    let toOrder = [].concat(arregloCelulares)
    switch(opc){
        case 1:
            console.log("Filtrando por precio en orden ascendente")
            ordenPrecioAscendente(toOrder)
            break
        case 2:
            console.log("Filtrando por precio en orden Descendente")
            ordenPrecioDescendente(toOrder)
            break
        default:
            alert("Opcion invalida")
    }
    return toOrder
}

//Voy a pedir 2 cotas.
function filtrarPrecio(arregloCelulares){
    let precioMin = 0
    let precioMax = 0

    do{
        precioMin = parseInt(prompt("Ingrese el precio minimo:"))
        if(precioMin < 0){
            alert("Ingrese un monto mayor a cero")
        }
    } while(precioMin < 0)

    do{
        precioMax = parseInt(prompt("Ingrese el precio maximo:"))
        if(precioMax < precioMin){
            alert("Ingrese un monto mayor o igual al precio minimo")
        }
    } while(precioMax < precioMin)
    let arregloFiltrado = arregloCelulares.filter((cel) => cel.precio >= precioMin && cel.precio <= precioMax)
    arregloFiltrado.length == 0 ? alert("No contamos con dispositivos en este rango de precios") : console.log(`Celulares entre U$S${precioMin} y U$S${precioMax}`)
    return arregloFiltrado
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
    if(marca != null){
        let arregloFiltrado = arregloCelulares.filter((cel) => cel.marca.toLowerCase() == marca.toLowerCase())
        arregloFiltrado.length == 0 ? alert("No contamos con dispositivos de esta marca") : console.log(`Celulares de la marca ${marca}`)
        return arregloFiltrado    
    } else{
        alert("Ingrese un valor")
        return arregloCelulares
    }
    
}

//Dado un modelo devuelve dicho celular
function buscarModelo(arregloCelulares){
    let modelo = prompt("Ingrese el modelo que desea buscar:")
    if(modelo != null){
        let arregloFiltrado = arregloCelulares.filter((cel) => cel.modelo.toLowerCase() == modelo.toLowerCase())
        if(arregloFiltrado.length == 0){
            alert("No contamos con este modelo")
        }
        return arregloFiltrado
    } else{
        alert("Ingrese un valor")
        return arregloCelulares
    }
    
}

//Saca un elemento del carrito dado su id
function quitarCelular(arregloCelulares){
    let indice = arregloCelulares.indexOf(buscarId(arregloCelulares))
    indice == -1 ? alert("El elemento no se encuentra en el carrito") : arregloCelulares.splice(indice, 1)
}

//Agrega un elemento al carrito dado su id
function agregarAlCarrito(arregloCelulares, stock){
    let nuevoCelular = buscarId(stock)
    nuevoCelular != undefined ? arregloCelulares.push(nuevoCelular) : alert("No contamos con este dispositivo")
}

function mostrarCarrito(carrito){
    if(carrito.length == 0){
        alert("Su carrito esta vacio")
    } else{
        console.log("Su carrito es")
        mostrarCatalogoConsola(carrito)
    }
}

function agregarCatalogo(arregloCelulares){
    let marca = prompt("Ingrese marca")
    let modelo = prompt("Ingrese modelo")
    let precio = -1
    while(isNaN(precio) || precio <= 0){
        precio = parseInt(prompt("Ingrese el precio deseado"))
        if(isNaN(precio)){
            alert("Por favor, ingrese un valor numerico mayor a cero")
        } else if(precio <= 0){
            alert("El precio debe ser mayor que cero")
        }
    }
    let id = -1
    let yaExiste = false
    do{
        id = parseInt(prompt("Ingrese el ID con el que desea registrar el producto"))
        yaExiste = arregloCelulares.find((cel) => cel.id == id) !== undefined
        if(yaExiste){
            alert("El id debe ser unico")
        } else if(id < 0){
            alert("El id debe ser mayor o igual a cero")
        }
    } while(id < 0 || yaExiste)
    arregloCelulares.push(new Celular(id, marca, modelo, precio))
}

//La contraseña es 1234
//Menu para agregar o quitar dispositivos del catalogo
function opcionesAdministrador(arregloCelulares){
    let intentos = 0
    let acceso = false
    let pwd = ""
    while(!acceso && intentos < 3){
        pwd = prompt("Ingrese contraseña (1234)")
        if(pwd === "1234"){
            acceso = true
        } else{
            intentos++
            alert(`La constraña no es corrcta: Intentos restantes: ${3 - intentos}`)
        }
    }

    if(acceso){
        let op = 1
        do {
            op = parseInt(prompt(`Ingrese una opcion:
            1) Agregar al catalogo
            2) Quitar del catalogo
            0) Salir`))

            switch(op){
                case 1:
                    agregarCatalogo(arregloCelulares)
                    break
                case 2:
                    quitarCelular(arregloCelulares)
                    break
                case 0:
                    alert("Saliendo de opciones de administrador")
                    break
                default:
                    alert("Opcion invalida")
            }
        }while (op != 0)  
    } else {
        alert("No tiene autorizacion para Ingresar")
    }
    
}

let stock = generarData()
let onDisplay = stock
console.log("Bienvenido")
mostrarCatalogoBrowser(onDisplay)
mostrarCatalogoConsola(onDisplay)
let carrito = []
let opc = 1
do{
    opc = parseInt(prompt(`Ingrese una opcion:
    1) Mostrar catalogo
    2) Agregar al carrito
    3) Quitar del carrito
    4) Ordenar por Precio
    5) Filtrar por precio
    6) Filtrar por marca
    7) Buscar modelo
    8) Remover filtros
    9) Mostrar carrito
    10) Limpiar carrito
    11) Opciones de Administrador
    0) Salir`))

    switch(opc){
        case 1:
            mostrarCatalogoConsola(onDisplay)
            break
        case 2:
            agregarAlCarrito(carrito, stock)
            break
        case 3:
            quitarCelular(carrito)
            break
        case 4:
            onDisplay = ordenarPrecio(onDisplay)
            mostrarCatalogoConsola(onDisplay)
            break
        case 5:
            onDisplay = filtrarPrecio(onDisplay)
            mostrarCatalogoConsola(onDisplay)
            break
        case 6:
            onDisplay = filtrarMarca(onDisplay)
            mostrarCatalogoConsola(onDisplay)
            break
        case 7:
            onDisplay = buscarModelo(onDisplay)
            mostrarCatalogoConsola(onDisplay)
            break
        case 8:
            onDisplay = stock
            mostrarCatalogoConsola(onDisplay)
            break
        case 9:
            mostrarCarrito(carrito)
            break
        case 10:
            carrito = []
            break
        case 11:
            opcionesAdministrador(stock)
            break
        case 0:
            alert("Gracias por su preferencia")
            break
        default:
            alert("Opcion invalida, por favor ingrese una presente en el menu")
    }
}while(opc !== 0)
