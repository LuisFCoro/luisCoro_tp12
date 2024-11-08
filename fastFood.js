
function calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const preciosHamburguesa = {
        "carne a la parrilla": 1800,
        "pollo": 1500,
        "vegetariana": 1200
    };
  
    const preciosAdicionales = {
        jamon: 30,
        queso: 25,
        salsaTomate: 5,
        mayonesa: 5,
        mostaza: 5,
        tomate: 15,
        lechuga: 10,
        cebolla: 10, 
    };
  
    let total = preciosHamburguesa[tipoHamburguesa];  

    if (jamon) total += preciosAdicionales.jamon;
    if (queso) total += preciosAdicionales.queso;
    if (salsaTomate) total += preciosAdicionales.salsaTomate;
    if (mayonesa) total += preciosAdicionales.mayonesa;
    if (mostaza) total += preciosAdicionales.mostaza;
    if (tomate) total += preciosAdicionales.tomate;
    if (lechuga) total += preciosAdicionales.lechuga;
    if (cebolla) total += preciosAdicionales.cebolla;
  
    return total;  
}

function fastFood(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const total = calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    
    
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`;
}

let mensaje = fastFood("Lucas", "Rodriguez", "carne a la parrilla", true, false, false, true, true, false, true, false);
console.log(mensaje);

// let mensaje2 = fastFood("Carlitos", "Tapia", "pollo", false, true, true, false, true, true, false, true);
// console.log(mensaje2);

// let mensaje3 = fastFood("Ana", "Laura", "vegetariana", false, false, false, false, false, false, false, false);
// console.log(mensaje3);
