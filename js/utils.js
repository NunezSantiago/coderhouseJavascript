class Celular{
    constructor(id, marca, modelo, precio, img){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.img = img
    }

    toString(){
        return `${this.id}: ${this.marca} ${this.modelo} Precio: U$S${this.precio}`
    }

    //Deprecated - las imagenes de cada celular se almacenan en: img/celulares/marca/modelo.webp
    getImgUrl(){
        return `${this.marca.toLowerCase()}/${this.modelo.toLowerCase().replaceAll(" ", "_")}.webp`
    }
}

function generarData(){
    let catalogo = []
    catalogo.push(new Celular(0, "Apple", "IPhone 11", 628, `apple/iphone_11.webp`))
    catalogo.push(new Celular(1, "Apple", "IPhone 12", 930, `apple/iphone_12.webp`))
    catalogo.push(new Celular(2, "Apple", "IPhone 13", 1188, `apple/iphone_13.webp`))
    catalogo.push(new Celular(3, "Apple", "IPhone 13 Mini", 995, `apple/iphone_13_mini.webp`))
    catalogo.push(new Celular(4, "Apple", "IPhone 13 Pro", 1344, `apple/iphone_13_pro.webp`))
    catalogo.push(new Celular(5, "Apple", "IPhone 13 Pro Max", 1699, `apple/iphone_13_pro_max.webp`))
    catalogo.push(new Celular(6, "Apple", "IPhone 14", 1299, `apple/iphone_14.webp`))
    catalogo.push(new Celular(7, "Apple", "IPhone 14 Pro", 1399, `apple/iphone_14_pro.webp`))
    catalogo.push(new Celular(8, "Apple", "IPhone 14 Pro Max", 1849, `apple/iphone_14_pro_max.webp`))
    catalogo.push(new Celular(9, "Google", "Pixel 5", 199, `google/pixel_5.webp`))
    catalogo.push(new Celular(10, "Google", "Pixel 6", 397, `google/pixel_5.webp`))
    catalogo.push(new Celular(11, "Google", "Pixel 6 Pro", 485, `google/pixel_6_pro.webp`))
    catalogo.push(new Celular(12, "Google", "Pixel 7", 649, `google/pixel_7.webp`))
    catalogo.push(new Celular(13, "Google", "Pixel 7 Pro", 899, `google/pixel_7_pro.webp`))
    catalogo.push(new Celular(14, "Google", "Pixel 7a", 509, `google/pixel_7a.webp`))
    catalogo.push(new Celular(15, "Motorola", "Edge 30 Fusion", 499, `motorola/edge_30_fusion.webp`))
    catalogo.push(new Celular(16, "Motorola", "Edge 30 Neo", 299, `motorola/edge_30_neo.webp`))
    catalogo.push(new Celular(17, "Motorola", "Moto E40", 129, `motorola/moto_e40.webp`))
    catalogo.push(new Celular(18, "Samsung", "Galaxy A34", 259, `samsung/galaxy_a34.webp`))
    catalogo.push(new Celular(19, "Samsung", "Galaxy A54", 399, `samsung/galaxy_a54.webp`))
    catalogo.push(new Celular(20, "Samsung", "Galaxy S22", 729, `samsung/galaxy_s22.webp`))
    catalogo.push(new Celular(21, "Samsung", "Galaxy S22 Plus", 866, `samsung/galaxy_s22_plus.webp`))
    catalogo.push(new Celular(22, "Samsung", "Galaxy S22 Ultra", 1099, `samsung/galaxy_s22_ultra.webp`))
    catalogo.push(new Celular(23, "Samsung", "Galaxy S23", 859, `samsung/galaxy_s23.webp`))
    catalogo.push(new Celular(24, "Samsung", "Galaxy S23 Plus", 999, `samsung/galaxy_s23_plus.webp`))
    catalogo.push(new Celular(25, "Samsung", "Galaxy S23 Ultra", 1199, `samsung/galaxy_s23_ultra.webp`))
    catalogo.push(new Celular(26, "Vivo", "Y20", 139, `vivo/y20.webp`))
    catalogo.push(new Celular(27, "Vivo", "Y33S", 229, `vivo/y33s.webp`))
    catalogo.push(new Celular(28, "Xiaomi", "Mi 12", 542, `xiaomi/mi_12.webp`))
    catalogo.push(new Celular(29, "Xiaomi", "Mi 12 Pro", 679, `xiaomi/mi_12_pro.webp`))
    catalogo.push(new Celular(30, "Xiaomi", "Mi 13", 1095, `xiaomi/mi_13.webp`))
    catalogo.push(new Celular(31, "Xiaomi", "Mi 13 Lite", 526, `xiaomi/mi_13_lite.webp`))
    catalogo.push(new Celular(32, "Xiaomi", "Mi 13 Pro", 1534, `xiaomi/mi_13_pro.webp`))
    catalogo.push(new Celular(33, "Xiaomi", "Redmi Note 11 Pro Plus", 310, `xiaomi/redmi_note_11_pro_plus.webp`))
    catalogo.push(new Celular(34, "Xiaomi", "Redmi Note 12", 154, `xiaomi/redmi_note_12.webp`))
    catalogo.push(new Celular(35, "Xiaomi", "Redmi Note 12 Pro", 320, `xiaomi/redmi_note_12_pro.webp`))
    catalogo.push(new Celular(36, "Xiaomi", "Redmi Note 12 Pro Plus", 365, `xiaomi/redmi_note_12_pro_plus.webp`))
    return catalogo
}

function JSONCelularParser(jsonFormat){
    let ret = []
    jsonFormat.forEach((elem) => {
        ret.push(Object.assign(new Celular(), elem))
    })
    return ret
}

function mostrarCatalogoBrowser(arregloCelulares){
    let divCatalogo = document.getElementById("catalogo")
    arregloCelulares.forEach((cel) => {
        let nuevoCelular = document.createElement("div")
        nuevoCelular.className = "m-3"
        nuevoCelular.innerHTML =
            `<div id="${cel.id}" class="card" style="width: 18rem;">
                <img src="img/celulares/${cel.img}" class="card-img-top" alt="${cel.toString()}">
                <div class="card-body">
                    <h5 class="card-title">${cel.marca}</h5>
                    <p class="card-text">${cel.modelo}</p>
                    <p class="card-text">U$S${cel.precio}</p>
                    <button type="button" class="btn btn-light agregarCarrito">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    </button>
                </div>
            </div>`
        nuevoCelular.getElementsByTagName("button")[0].onclick  = () => {
            let carrito = JSON.parse(localStorage.getItem("carrito"))
            carrito.push(cel)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
        divCatalogo.appendChild(nuevoCelular)
    })
}

function mostrarCarrito(){
    let carritoModalBody = document.getElementById("carritoModalBody")
    let productosCarrito = JSONCelularParser(JSON.parse(localStorage.getItem("carrito")))
    carritoModalBody.innerHTML = ``
    if(productosCarrito.length != 0){
        let total = 0
        productosCarrito.forEach((cel) => {
            let prod = document.createElement("div")
            prod.innerHTML = `
            <div class="card mb-3" style="max-width: 450px;">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="img/celulares/${cel.img}" class="card-img-top" alt="${cel.toString()}">
                </div>
                <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${cel.marca}</h5>
                        <p class="card-text">${cel.modelo}</p>
                        <p class="card-text">U$S${cel.precio}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        total+=cel.precio
        carritoModalBody.appendChild(prod)
        })

        let totalDiv = document.createElement("div")
        totalDiv.innerHTML = `<h5 class="text-end"> 
                            Total: U$S${total}
                            </h5>`
        carritoModalBody.appendChild(totalDiv)
    } else{
        let vacioDiv = document.createElement("div")
        vacioDiv.innerHTML = `<p> 
                            No hay productos en el carrito
                            <p>`
        carritoModalBody.appendChild(vacioDiv)
    }
}

function limpiarDisplay(){
    let divCatalogo = document.getElementById("catalogo")
    divCatalogo.innerHTML = ``
}