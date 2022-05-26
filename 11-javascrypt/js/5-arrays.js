// Declarar un arreglo
let _usuarios = [];
let series = ['Naruto',2,'GOT',8,'Rick and Morty',4];

document.write(series);
// Como acceder a un arreglo
document.write('<br>' + series[0]);
document.write('<br>' + series[4]);
// Bucles para mostrar todos los elementos del arreglo
for (let i = 0; i < series.length; i++) {
    document.write('<br>' + series[i]);
}

// Agregar un elemento al final del arreglo
document.write('<hr>');
series.push('Ozark');
for (let i = 0; i < series.length; i++) {
    document.write('<br>' + series[i]);
}

// Agragar un elemento en una posicion particuar
document.write('<hr>');
series.splice(3,0,'Breaking Bad');
for (let i = 0; i < series.length; i++) {
    document.write('<br>' + series[i]);
}

// Elimar un elemento desde uns posicion particular
// document.write('<hr>');
// series.splice(5,2); //Elimina desde la posicion 5 dos elementos
// for (let i = 0; i < series.length; i++) {
//     document.write('<br>' + series[i]);
// }

// Elimar todos los elementos desde una posicion particular
document.write('<hr>');
series.splice(7);
for (let i = 0; i < series.length; i++) {
    document.write('<br>' + series[i]);
}

// Modificar el elemento de un arreglo
series[6] = true;
document.write('<hr>');
for (let i = 0; i < series.length; i++) {
    document.write('<br>' + series[i]);
}