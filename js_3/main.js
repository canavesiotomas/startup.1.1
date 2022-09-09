// Start Up 
const stock = [
    { id: "itemA", price: 10, units: 15, tax: 1.21},
    { id: "itemB", price: 10, units: 15, tax: 1.21},
    { id: "itemC", price: 10, units: 15, tax: 1.21},
    { id: "itemD", price: 10, units: 15, tax: 1.21},
    { id: "itemE", price: 10, units: 15, tax: 1.21},
    { id: "itemF", price: 10, units: 15, tax: 1.21},
    { id: "itemG", price: 10, units: 15, tax: 1.21},
]
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
    menu();
}
}
//
function finalPrice() {
    console.log("Facturacion");
        console.log("Proximamente podra facturar");
        let nombre = prompt("Nombre del item")
        let precio = stock[nombre][1] * stock[nombre][3];
        let units = prompt("Ingrese Cantidad")
        function final() {
                return precio*units            
            }    
        console.log("El Precio Final con impuestos es $" + final());
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


