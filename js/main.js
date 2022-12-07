/* let producto1 = "guitarra";
let producto2 = "guitarra electrica";
let producto3 = "teclado";
let producto4 = "ecualizador";
let producto5 = "microfono";
let producto6 = "bateria";

alert ("disponemos de esta lista de productos: guitarra, guitarra electrica, teclado, ecualizador, microfono, bateria")

let entrada =prompt("ingrese")

 */
/* let nombre = "joako ";
let apellido
apellido = "frias";

console.log("hola");
console.log(nombre+ apellido);

let ingresoNombre = prompt("ingresa tu nombre");
console.log(ingresoNombre);

num1 = parseInt(prompt ("ingrese un numero"));
console.log(num1);
num2 = parseInt(prompt("ingrese otro numero"));
console.log(num2);

let resultado = num1+num2;
alertdsf("el resultado es " + resultado);
 */

/* let juegos = 200;
let precio=0;
let total= precio + juegos;

alert ("Disponemos de esta lista de juegos:\n \n 1)Mario World \n 2)Castelvania \n 3)Zelda \n 4)Mario Kart");

let entrada = prompt("Seleccione un juego para el carrito. Escriba ok para finalizar la compra");

function Carrito () {
    while (entrada != "ok") {
        switch (key) {
            case "Mario World":
                precio=juegos;
                console.log("Se agrego al carrito: Mario World");
                break;            
            case "Castelvania":
                precio=juegos;
                console.log("Se agrego al carrito: Castelvania");
                break;
                case "Zelda":
                precio=juegos;
                console.log("Se agrego al carrito: Zelda");
                break;
            case "Mario Kart":
                precio=juegos;
                console.log("Se agrego al carrito: Mario Kart");
            break;
        
            default:
                alert("Seleccione una opcion valida")
                total=precio+juevos;
                
        }
        entrada = prompt("Seleccione otro juego para el carrito. Escriba ok para finalizar la compra;")   

        if (entrada=="ok") {
            alert("El total es: " +total+ "¿desea continuar?");
            
        }
        
        
    }
} */


/* do {
    let totalPagar = 0;
    let cantidadDescuento = 0;
    let totalDescuento = 0;

    let nombre = prompt("Escribir el nombre del producto");
    console.log(nombre);
    let precio = prompt("Escribir el precio del prouducto");
    console.log(precio);
    let cantidad = prompt("escribir la cantidad");
    console.log(cantidad);
    let totalProducto=precio*cantidad;
    console.log(totalProducto);

    if (cantidad>10) {
        let descuento = ((totalProducto*5)/100);
        totalProducto = (totalProducto-descuento);
        console.log(totalProducto);
        cantidadDescuento = cantidadDescuento+1;
        totalDescuento = totalDescuento+descuento;        
    }

    let respuesta = prompt("Desea cargar otro producto 1-Si 2-No")
    while (respuesta !=1 || respuesta !=2) {
        respuesta;
    }

    
} while (respuesta=2);

alert("el total a pagar es de " + totalPagar + "\n la cantidad de productos con descuento es de " + cantidadDescuento + "\n el descuento en productos es de " + totalDescuento);

if (totalPagar>7500) {
    alert("informar a afip");
    let nombreCliente = prompt("ingrese el nombre del cliente");
    let cuitCliente = prompt("ingrese el cuit del cliente");
    let direccionCliente=prompt("ingrese la direccion del cliente");
    
} */

let savedPIN = "1234";

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
};
alert("gracias por operar con nosotros")
