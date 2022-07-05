export function campoRequerido(){
    console.log('desde la funcion blur');
    let input = document.getElementById('nombre');
    if(input.value.length > 0){
        console.log("El dato esta correcto");
    }else{
        console.log("Error");
    }
}