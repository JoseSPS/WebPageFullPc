import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from "../../servicios/productos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private servicio: ProductosService,
    private router:Router) { }

  ngOnInit() {
    this.servicio.getProductos().subscribe((productoSnapshot) => {
      this.productos = [];
      productoSnapshot.forEach((productoData: any) => {
        this.productos.push({
          id: productoData.payload.doc.id,
          nombre_producto: productoData.payload.doc.data().nombre_producto,
          descripcion: productoData.payload.doc.data().descripcion,
          marca: productoData.payload.doc.data().marca,
          precio: productoData.payload.doc.data().precio,
          categoria: productoData.payload.doc.data().categoria,
          unidades: productoData.payload.doc.data().unidades
          /* data: productoData.payload.doc.data() */
        });
      })
      console.log(this.productos);
    });
  }

  verProducto( idx:number ){
    this.router.navigate( ['/producto', idx] );
  }

}
