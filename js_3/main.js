// Start Up 
const stock = {
    product1: [ "ItemA", 10, 15, 1.21],
    product2: [ "ItemB", 10, 15, 1.21],
    product3: [ "ItemC", 10, 15, 1.21],
    product4: [ "ItemD", 10, 15, 1.21],
    product5: [ "ItemE", 10, 15, 1.21],
    product6: [ "ItemF", 10, 15, 1.21],
    product7: [ "ItemG", 10, 15, 1.21]       
}

//
function analitics(){
    console.table(stock)
}
//
function searchProduct() {
    let nombre = prompt("Ingrese Nombre del Producto").toLowerCase()
    console.table(stock[nombre]);
}
//
function select() {
    let dataSelection = prompt("1. Vista General; 2. Consultar Producto")
if(dataSelection == 1){
    console.log("Datos de Stock")
    analitics();
} else if(dataSelection == 2){
    searchProduct();
} else if (dataSelection != 1 && 2){
    alert("seleccione una opcion valida");
    menu();
}
}
//

function finalPrice() {
    console.log("Facturacion");
        console.log("Proximamente podra facturar");
        let nombre = prompt("Nombre del item")
        let precio = stock[nombre][1];
        let units = prompt("Ingrese Cantidad")
        function final() {
                return precio*units            
            }    
        console.log("El Precio Final es $" + final());
}
//
function newProduct() {
    console.log("New Product");
        
    let nameN = prompt("Nombre");
    let unitsN = prompt("Unidades");
    let priceN = prompt("Precio");
    let taxN = prompt("Impuestos");

    class stock{
        constructor(item){
            this.item = nameN;
            this.units1 = unitsN;
            this.price1 = priceN;
            this.tax1 = taxN 
        }
    }
        const itemN =  new stock(); 
        console.table(itemN);
        console.log("Proximamente podra guardar el elemento nuevo"); 
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

menu();
