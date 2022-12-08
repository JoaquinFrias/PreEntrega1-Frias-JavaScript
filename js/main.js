let savedPIN="666";
let savedUser= "Juan";

function login() {
    let ingresar=false;   
    for (let i =2; i>=0; i--) {
        let usuarioNombre = prompt("Ingrese su nombre de usuario:");
        let usuarioPIN=prompt("Ingrese su PIN");
        if (usuarioPIN == savedPIN && usuarioNombre == savedUser) {
            alert("Ingreso existoso. Bienvenido/a " + usuarioNombre + " a la Casa de las Guitarras");
            ingresar = true;
            break;
        } else {
            alert("Usuario y/o Contraseña Incorrecta \n le quedan " + i + " oportunidades");
        }
    }
    return ingresar;
}

let sesionExitosa=login();

if(sesionExitosa){
    let totalPagar = 0;
    let cantidadDescuento = 0;
    let totalDescuento = 0;
    alert("Recuerde que comprando mas de 10 productos de un mismo tipo obtiene un 10% de descuento")
    let respuesta = prompt("Desea cargar un producto al carrito 1-Si 2-No");
    
    while(respuesta != 2){
        let nombre = prompt("Escribir el nombre del producto");
        let precio = parseFloat(prompt("Escribir el precio del producto")); 
        let cantidad = parseInt(prompt("escribir la cantidad"));
        let totalProducto=precio*cantidad;
        
        if (cantidad>10) {
            let descuento = ((totalProducto*10)/100);1
            totalProducto = (totalProducto-descuento);
            cantidadDescuento = cantidadDescuento+1;
            totalDescuento = totalDescuento+descuento;        
        }
        totalPagar=totalPagar+totalProducto
        alert("el total a pagar del producto es de " +totalProducto)
        respuesta = prompt("Desea cargar otro producto 1-Si 2-No")
    }

    alert("el total a pagar es de " + totalPagar + "\n la cantidad de producto/s con descuento es de " + cantidadDescuento + "\n el descuento en productos es de " + totalDescuento);
        
    }else{
    alert("Demasiados intentos fallidos \n Vuelva a intentarlo mas tarde o comuniquese por telefono a alguna de nuestras sucursales")
    }