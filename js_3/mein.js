//Start Up - Data 

const button1 = document.getElementById("data");
button1.addEventListener("click", showAll)

const button2 = document.getElementById("newProduct");
button2.addEventListener("click", newProduct)

const button3 = document.getElementById("pedidos");
button3.addEventListener("click", unitPrice)



let product = ["prod1", "prod2", "prod3", "prod4", "prod5"]
let price = [15, 25, 12, 32, 40]
let unit = [12, 14, 15 ,23, 50]
let tax = [1.21, 1.05, 1.21, 1.21, 1.05]


function showAll() {
    product.forEach(proudcuts => {  
       let idx = product.indexOf(proudcuts) 
       let nombre = product[idx]
       let precio = price[idx]
       let unidades = unit[idx]
       let impuestos = tax[idx]
   
       let item = {
       nombre: nombre,
       precio: precio,
       unidades: unidades,
       impuestos: impuestos
       }
       console.table(item)
   })
}
//


function indexer() {
    let kind = prompt("Nombre del producto")
    let index = product.indexOf(kind)
    let composition = [product[index], price[index], unit[index], tax[index]]
    console.table(composition)
}

function taxPrice() {
    let kind = prompt("Nombre del producto")
    let index = product.indexOf(kind)
    let composition = [price[index] * tax[index]]
    let pf = composition[0]
    return pf
}

function unitPrice(pf) {
   let precio = taxPrice(pf)
   let unit = Number(prompt("Ingrese Cantidad de Unidades"))
   console.log(precio * unit);
    
}

function taxCalc() {
    let taxes = Number(prompt("Procentaje de Impuestos"))
    return ((taxes / 100)+1)
}

function newProduct() {
    let prod = prompt("Ingrese nombre del producto")
    let prices  = Number(prompt("Ingrese precio del producto "));
    let units = Number(prompt("Ingrese la cantidad de unidades existentes"));
    let taxes = taxCalc();

    product.push(prod);
    price.push(prices);
    unit.push(units);
    tax.push(taxes);

   showAll();
}

function delate() {
    let kind = prompt("Nombre del producto")
    let index = product.indexOf(kind)
    let delProd = product.splice(index, 1)
    let delPrice = price.splice(index, 1)
    let delUnit = unit.splice(index, 1)
    let delTax = tax.splice(index, 1)

    showAll();
}
function recorrido() {
let carrito = []
for (let index = 0; index < product.length; index++) {
    const element = product[index];
    let list = [
        {
            nombre: product[index],
            precio: price[index],
            unidades: unit[index],
            impuestos: tax[index]
        }
    ] 
    carrito.push(list)

    let save = JSON.stringify(carrito) 
    localStorage.setItem("productos", save)
}

}

function clear(){localStorage.clear}
clear();