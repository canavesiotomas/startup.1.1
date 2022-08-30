// Start Up 
const stock = {
    item1: {
        name1: "ItemA",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
        
    },
    item2: {
        name1: "ItemB",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
        
    },
    item3: {
        name1: "ItemC",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
        
    },
    item4: {
        name1: "ItemD",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
       
    },
    item5: {
        name1: "ItemE",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
        
    },
    item6: {
        name1: "ItemF",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
        
    },
    item7: {
        name1: "ItemG",
        units1: 10,
        price1: 15, 
        tax1: 1.21,
    }       
}



function menu() {
    let selection = prompt("1. Datos; 2.Facturación; 3. Nuevo Producto; 4.Salir");
     if (selection == 1) {
        function select() {
            let dataSelection = prompt("1. Vista General; 2. Consultar Producto")
        if(dataSelection == 1){
            console.log("Datos de Stock")
            function analitics(){
                console.table(stock)
            }
            analitics();
        }else if(dataSelection == 2){
            let nombre = prompt("Ingrese Nombre del Producto").toLowerCase()
            console.table(stock[nombre]);
        } else if (dataSelection != 1 && 2){
            alert("seleccione una opcion valida");
            menu();
        }
        }
        select();
       
     }else if (selection == 2) {
        console.log("Facturacion");
        console.log("Proximamente podra facturar")

     } else if (selection == 3) {
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
    }else if(selection == 4){
        alert("Gracias por usar StartUp");
    } else {
   alert("Seleccione una opcion Válida")
   menu()
}
}

menu();


