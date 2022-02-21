class Propietario {
    constructor (nombrePropietario, direccion,telefono){
        this.nombrePropietario = nombrePropietario
        this.direccion = direccion
        this.telefono = telefono
    }

    datosPropietario(){
        return `El nombre del propietario es: ${this.nombrePropietario}. su domicilio es ${this.direccion} y el numero de telefono es ${this.telefono}`

    }

}

class Animal extends Propietario{
    constructor(nombrePropietario, direccion,telefono,tipoAnimal){
        super(nombrePropietario, direccion,telefono)
        this.tipoAnimal = tipoAnimal
    }
    get getTipoAnimal(){
        return `El tipo de animal es: ${this.tipoAnimal}`
    }
}

class Mascota extends Animal {
    constructor (nombrePropietario, direccion,telefono,tipoAnimal, nombreMascota, enfermedad){
        super(nombrePropietario, direccion,telefono,tipoAnimal)
        this.nombreMascota = nombreMascota
        this.enfermedad = enfermedad
    }
    set setNombreMascota(value){
        this.enfermedad =value
    }
    set setEnfermedad(value){
        this.nombreMascota =value
    }

    get getNombreMascota(){
       return  this.nombreMascota 
    }
    get getEnfermedad(){
        return this.enfermedad 
    }

}

const propietario = document.getElementById("propietario")
const telefono = document.getElementById("telefono")
const direccion = document.getElementById("direccion")
const nombreMascota = document.getElementById("nombreMascota")
const tipo = document.getElementById("tipo")
const enfermedad = document.getElementById("enfermedad")
const resultado = document.getElementById("resultado")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();

    if (tipo.value === "perro"){
    const ingresoMascota= new Mascota(
        propietario.value,
        direccion.value,
        telefono.value,
        tipo.value,
        nombreMascota.value,
        enfermedad.value,
    );
    resultado.innerHTML = `
    <h2>🐕</h2>      
    <ul>
    <li>${ingresoMascota.datosPropietario()}</li>
    <li>${ingresoMascota.getTipoAnimal}, su nombre es: ${ingresoMascota.getNombreMascota} y el motivo de su ingreso es: ${ingresoMascota.getEnfermedad} </li>
     </ul>
    `
}
if (tipo.value === "gato"){
    const Gato= new Mascota(
        propietario.value,
        direccion.value,
        telefono.value,
        tipo.value,
        nombreMascota.value,
        enfermedad.value,
    );
    resultado.innerHTML = `      
    <h2>🐈</h2>
    <ul>
    <li>${Gato.datosPropietario()}</li>
    <li>${Gato.getTipoAnimal}, su nombre es: ${Gato.getNombreMascota} y el motivo de su ingreso es: ${Gato.getEnfermedad} </li>
     </ul> 
    `
}
if (tipo.value === "conejo"){
    const conejo= new Mascota(
        propietario.value,
        direccion.value,
        telefono.value,
        tipo.value,
        nombreMascota.value,
        enfermedad.value,
    );
    resultado.innerHTML = `      
    <h2>🐇</h2>
    <ul>
    <li>${conejo.datosPropietario()}</li>
    <li>${conejo.getTipoAnimal}, su nombre es: ${conejo.getNombreMascota} y el motivo de su ingreso es: ${conejo.getEnfermedad} </li>
     </ul> 
    `
}
})
