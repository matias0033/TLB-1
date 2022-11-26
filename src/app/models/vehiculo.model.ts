export class VehiculoModel {
    id: string;
    placa: string;
    marca: string;
    modelo: string;
    anio: number;
    color: string;
    propietario: string;
    cantidadpasajeros: number;
    precio: number;
    uid: string;
    hora: string;
    telefono: number;
    estado: boolean;

    //Cuando se crea una nueva instancia de vehiculo model por defecto el estado es true.
    constructor() {
        this.estado = false;
    }
}