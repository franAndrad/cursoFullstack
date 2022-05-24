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