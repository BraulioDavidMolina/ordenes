import { Timestamp } from "@angular/fire/firestore";

export interface ordenes {
    id: number;
    numero: number;
    fechaAtencion: Timestamp;
    descripcion: string;
}