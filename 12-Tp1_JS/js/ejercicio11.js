// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numero = parseInt(prompt("Ingrese un numero"));

if((numero%2)==0)
    document.write("El numero " + numero + " es divisible por 2 <br>");
else if((numero%3)==0)
    document.write("El numero " + numero + " es divisible por 3 <br>");
else if((numero%5)==0)
    document.write("El numero " + numero + " es divisible por 5 <br>");
else if((numero%7)==0)
    document.write("El numero " + numero + " es divisible por 7 <br>");
else
    document.write("El numero no es divisible por ninguno");