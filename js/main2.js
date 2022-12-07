/* let savedPIN = "1234";

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--){
        let userPIN = prompt("ingresa tu PIN");
        if (userPIN == savedPIN) {
            alert("ingreso exitoso")
            ingresar=true;
            break;
        }else{
            alert("error te queda " + i + " oportunidades");
        }
    }
    return ingresar;
}
//console.log(login());
let exito=login();
if(exito){
    let saldo = 35000;
    let opcion = prompt("elegi una opcion: \n1-Saldo. \n2-Retiro de dinero. \n3-Deposito. \n4-Finalizar.");

    while(opcion != "4"){
        switch (opcion) {
            case "1":
                alert("tu saldo es $" + saldo);            
                break;
            case "2":
                let retiro = parseInt(prompt("ingrese el monto a retirar"));
                if(retiro <= saldo){
                    saldo =  saldo - retiro;
                    alert("retiraste $" + retiro + ", tu nuevo saldo es : $" + saldo);
                }else{
                    alert("saldo insuficiente");
                }                
                break
            case "3":
                let deposito = parseInt(prompt("ingrese el monto a depositar"));
                saldo = saldo + deposito;
                alert("depositaste $" + deposito + ", tu nuevo saldo es; $" + saldo);                                
                break   
            default:
                alert("opcion no valida");
                break;
            }
        opcion = prompt("elegi una opcion: \n1-Saldo. \n2-Retiro de dinero. \n3-Deposito. \n4-Finalizar.");
    } 
    

}else{
    alert("retuvimos tu tarjeta, comunicate al 0800-keka");
}
alert("gracias por operar con nosotros");

 */
let totalPagar = 0;
let cantidadDescuento = 0;
let totalDescuento = 0;
let respuesta = prompt("Desea cargar un producto al carrito 1-Si 2-No");

while(respuesta != "2"){
    let nombre = prompt("Escribir el nombre del producto");
    let precio = prompt("Escribir el precio del prouducto");
    let cantidad = prompt("escribir la cantidad");
    let totalProducto=precio*cantidad;
    
    if (cantidad>10) {
        let descuento = ((totalProducto*5)/100);
        totalProducto = (totalProducto-descuento);
        cantidadDescuento = cantidadDescuento+1;
        totalDescuento = totalDescuento+descuento;        
    }
    totalPagar=totalPagar+totalProducto
    alert("el total a pagar del producto es de " +totalProducto)

    respuesta = prompt("Desea cargar otro producto 1-Si 2-No")
}

alert("el total a pagar es de " + totalPagar + "\n la cantidad de productos con descuento es de " + cantidadDescuento + "\n el descuento en productos es de " + totalDescuento);

if (totalPagar>7500) {
    alert("informar a afip");
    let nombreCliente = prompt("ingrese el nombre del cliente");
    let cuitCliente = prompt("ingrese el cuit del cliente");
    let direccionCliente=prompt("ingrese la direccion del cliente");
    
} 
