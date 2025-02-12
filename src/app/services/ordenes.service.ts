import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentReference, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { orden } from '../interfaces/interfaces';
import { DocumentData } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private readonly _firestore = inject(Firestore);
  private readonly _ordenCollection = collection(this._firestore, 'ordenes')


  getOrdenes(): Observable<any[]> {
    const ordenesCollection = collection(this._firestore, 'ordenes');
    return collectionData(ordenesCollection, { idField: 'id' });
  }


  addOrden(orden: Partial<orden>): Promise<DocumentReference<DocumentData, DocumentData>> {
    return addDoc(this._ordenCollection, {
      created: new Date(),
      edited: new Date(),
      ...orden,
    })
  }


  async getOrdenById(id: string): Promise<orden> {
    const docRef = this._getDocRef(id);
    const documentData = await getDoc(docRef);
    return documentData.data() as orden;
  }

  updateOrden(id: string, orden: orden) {
    const docRef = this._getDocRef(id);
    updateDoc(docRef, { ...orden });
  }

  deleteOrden(id: string) {
    const docRef = this._getDocRef(id);
    deleteDoc(docRef);
  }

  private _getDocRef(id: string) {
    return doc(this._firestore, 'ordenes', id);
  }







}
