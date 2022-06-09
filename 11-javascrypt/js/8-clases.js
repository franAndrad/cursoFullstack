
// crear una clase
class Usuario{
    // creamos un metodo constructor
    constructor(nombreUsuario,nombre,apellido,correo,password,direccion){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
    }
    
    // definir los metodos
    cambiarPassword(){
        document.write('<br>Cambiando el password...');
    }
    
    // metodo para imprimir los datos
    mostrarDatos(){
        document.write(`<br>
        <ul>
            <li>Nombre: ${this.nombre} </li>
            <li>Apellido: ${this.apellido} </li>
            <li>Correo: ${this.correo} </li>
            <li>Direccion: ${this.direccion} </li>
            <li>Nombre usuario: ${this.nombreUsuario} </li>
        </ul>`);
    }
}

// Como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmaechea','Valentina', 'Ormaechea', 'valeOrmaechea@gmail.com','123456a','-');
let userFrancisco = new Usuario('franAndrad','Francisco', 'Andrade', 'franAndrad@gmail.com','123456a','-');

console.log(userValentina);
userValentina.mostrarDatos();
userFrancisco.mostrarDatos();