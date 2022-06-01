export const nombre = 'leo'
export const edad = 26

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

export default function mostrarCartel() {
    console.log('Hola mundo');
}