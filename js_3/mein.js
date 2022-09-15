
//
let prod1 = {description: "itemA", price: 10, units: 15,  tax: 1.21};
let prod2 = {description: "itemB", price: 10, units: 15,  tax: 1.21};
let prod3 = {description: "itemC", price: 10, units: 15,  tax: 1.21};
let prod4 = {description: "itemD", price: 10, units: 15,  tax: 1.21};
let prod5 = {description: "itemE", price: 10, units: 15,  tax: 1.21};
let prod6 = {description: "itemF", price: 10, units: 15,  tax: 1.21};
let prod7 = {description: "itemG", price: 10, units: 15,  tax: 1.21};
const stock = [prod1, prod2, prod3, prod4, prod5, prod6, prod7];


function stockAnalitics() {
let selection = prompt("1. Tabla de Productos; 2. Buscar Producto; 3. Menu Anterior")
    if (selection == 1) {
        showTable();
    }else if(selection == 2){
        searchIn();
    }else if (selection == 3) {
        menu();
    }else{
        alert("Seleccione una opcion válida");
        stockAnalitics();
    }
}

function showTable(){  
    console.table(stock);
}

function searchIn(){  
   
}

stockAnalitics();

// const [, p1,, p3] = prod1; 
//     console.log(p1 * p3);