import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable()
export class ProductosService {

    productos = [];

    constructor(private db: AngularFirestore) {
    }

    //Obtiene todos los gatos
    public getProductos() {
        return this.db.collection('productos').snapshotChanges();
    }

    public getProducto(idx: string) {
        let prodReference = this.db.collection('productos');
        return prodReference.doc(idx).get();
    }

    public buscarProducto(termino: string) {
        return this.db.collection('productos', ref => ref.where('marca', '==', termino)).snapshotChanges();
    }

}

export interface Producto {
    id: string;
    nombre_producto: string;
    descipcion: string;
    marca: string;
    precio: string;
    unidades: string;
} 