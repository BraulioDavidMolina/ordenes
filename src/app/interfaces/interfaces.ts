import { Timestamp } from "@angular/fire/firestore";

export interface orden {
    id: string;
    numero: number;
    descripcion: string;
    fechaAtencion: Timestamp;
    created: Timestamp;
    edited: Timestamp;
    //editedd: Date;
}