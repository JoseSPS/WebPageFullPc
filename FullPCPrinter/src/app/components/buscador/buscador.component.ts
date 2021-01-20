import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../servicios/productos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  productos:any[] = [];
  termino: string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private servicio: ProductosService,
    private router:Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.servicio.buscarProducto(params['termino']).subscribe((productoSnapshot) => {
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
      });
    });
  }

  ngOnInit(): void {
    
  }

  verProducto( idx:string ){
    this.router.navigate( ['/producto', idx] );
  }

}
