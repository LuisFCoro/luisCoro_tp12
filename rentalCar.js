function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let precioPorDia, mensaje;


    switch(tipoVehiculo.toLowerCase()) {
        case "compacto":
            precioPorDia = 14000;
            break;
        case "mediano":
            precioPorDia = 17000;
            break;
        case "camioneta":
            precioPorDia = 28000;
            break;
        default:
            console.log("Tipo de vehículo no válido");
            return;
    }


    let total = precioPorDia * diasAlquiler;


    if (sillaParaBebe) {
        total = total + 1200 * diasAlquiler;
    }

    mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${total}.`;


    if (sillaParaBebe) {
        mensaje = mensaje + " Además, se incluye la silla para niños en el costo.";
    }


    console.log(mensaje);
}




// rentalCar("compacto", 3, true);


// rentalCar("mediano", 5, false);


// rentalCar("camioneta", 7, true);


// rentalCar("compacto", 10, false);
