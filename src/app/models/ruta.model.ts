export class RutaModel {
    id: string;         // ID de la ruta 
    nnombre: string;
    latitud: string;
    longitud: string;
    km: string;
    tiempo: string;
    hora: string;
    estado: boolean;
    uid: string;        // ID del usuario 


    constructor() {
        this.estado = false;
    }
}