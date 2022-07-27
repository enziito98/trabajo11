let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {

case "lunes":
alert("lunes rutina de tren superior");
 break;

case "martes":
alert("martes rutina de tren inferior.");
 break;

case "miercoles":
alert("miércoles descanso.");
 break;

case "jueves":
alert("jueves rutina de tren superior.");
 break;

 case "viernes":
alert("viernes rutina tren inferior.");
 break;

case "sabado":
alert("sábado descanso.");
 break;

case "domingo":
alert("domingo descanso.");
 break;

 default:
alert("Escribe el día de la semana en minúsculas y sin acentos.");
}

let numero1 = prompt('ingrese el primer numero del bucle.');
let numero2 = prompt('ingrese el segundo numero del bucle');

for(i = numero1; i <= numero2; i++){
    document.write('num elegido por usuario:' + i + "<br>");
}

for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");
}
