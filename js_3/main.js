// Start Up 
const button1 = document.getElementById("data");
button1.addEventListener("click", select)

const button2 = document.getElementById("newProduct");
button2.addEventListener("click", newProduct)

const button3 = document.getElementById("pedidos");
button3.addEventListener("click", finalPrice)
//
prod1 = { id: "itemA", price: 10, units: 15, tax: 1.21},
prod2 = { id: "itemB", price: 10, units: 15, tax: 1.21},
prod3 = { id: "itemC", price: 10, units: 15, tax: 1.21},
prod4 = { id: "itemD", price: 10, units: 15, tax: 1.21},
prod5 = { id: "itemE", price: 10, units: 15, tax: 1.21},
prod6 = { id: "itemF", price: 10, units: 15, tax: 1.21},
prod7 = { id: "itemG", price: 10, units: 15, tax: 1.21}

//
const stock = [ prod1, prod2, prod3, prod4, prod5, prod6, prod7]
//
function analitics(){
    console.table(stock)
}
//
function searchProduct(value) { 
    console.table(stock.find(stok => stok.id === value));
}
//
function verifyItem(value) {
 return stock.some(real=> real.id === value)

}
//
function requestProduct() {
   let value = prompt("Ingrese el Nombre del producto o Presione Enter para ir al menu anterior");
    if (verifyItem(value) === false){
        alert("El producto no Existe");
        select();
    }else if(value == null){
        select()
    }else{
        searchProduct(value);}   
}
//
function select() {
    let dataSelection = prompt("1. Vista General; 2. Consultar Producto; 3. Salir")
if(dataSelection == 1){
    console.log("Datos de Stock")
    analitics();
} else if(dataSelection == 2){
    requestProduct();
}else if(dataSelection == 3){
    menu();
} else if (dataSelection != 1 && 2){
    alert("seleccione una opcion valida");
    
}
}
//

//
function finalPrice() {
    let val = prompt("Ingrese Producto")
    if (val == "prod1") {
        const {id, price, units, tax} = prod1;
        console.log(price*tax)
    }else if (val == "prod2") {
        const {id, price, units, tax} = prod2;
        console.log(price*tax)
    }else if (val == "prod3") {
        const {id, price, units, tax} = prod3;
        console.log(price*tax)
    }else if (val == "prod4") {
        const {id, price, units, tax} = prod4;
        console.log(price*tax)
    }else if (val == "prod5") {
        const {id, price, units, tax} = prod5;
        console.log(price*tax)
    }else if (val == "prod6") {
        const {id, price, units, tax} = prod6;
        console.log(price*tax)
    }else if (val == "prod7") {
        const {id, price, units, tax} = prod7;
        console.log(price*tax)
    }else {
        alert("Ingrese Valor Existente");
        
    }

}
//
function newProduct() {
    console.log("New Product");
    let id = prompt("Nombre");
    let units = prompt("Unidades");
    let price = prompt("Precio");
    let tax = prompt("Impuestos");

    class stock{
        constructor(item){
            this.item = id;
            this.price1 = price;
            this.units1 = units;
            this.tax1 = tax 
        }
    }
        const itemN =  new stock(); 
        console.table(itemN);
        console.log("Proximamente podra guardar el elemento nuevo"); 


        localStorage.setItem(JSON.stringify(itemN))

    }

//
function saveValues() {
    
}
//
function menu() {

    let selection = prompt("1. Datos; 2.Facturación; 3. Nuevo Producto; 4.Salir");
     if (selection == 1) {
         select();
       }else if (selection == 2) {
         finalPrice();
     } else if (selection == 3) {
        newProduct();
    }else if(selection == 4){
        alert("Gracias por usar StartUp");
    } else {
   alert("Seleccione una opcion Válida")
   menu()
}
}
// menu();