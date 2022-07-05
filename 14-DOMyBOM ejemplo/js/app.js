import { campoRequerido } from "./validaciones.js";

let nombre = document.getElementById('nombre');
nombre.addEventListener('blur',campoRequerido);

let edad = document.getElementById('edad');
edad.addEventListener('blur',campoRequerido);