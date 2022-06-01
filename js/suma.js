export const nombre = 'ariel'
export const edad = 30

export function sumar(n1, n2) {
    return n1 + n2
}


export class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }
    mostrarInfo() {
        return `Nombre: ${this.nombre}`
    }
}

export default function mostrarCartel () {
    console.log('Hola mundo');
}