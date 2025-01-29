import { Timestamp } from "@angular/fire/firestore";

export interface ordenes {
    id: string;
    numero: number;
    descripcion: string;
    fechaAtencion: Timestamp;
    created: Timestamp;
    edited: Timestamp;
}