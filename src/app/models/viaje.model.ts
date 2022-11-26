export class ViajeModel {
    id: string;          // ID de la ruta 
    nombrepasajero: string;
    uidpasajero: string;
    estado: boolean;
    uidconductor: string;


    constructor() {
        this.estado = true;
    }
}