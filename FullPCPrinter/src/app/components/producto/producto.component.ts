import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  producto: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private servicio: ProductosService) {
    this.activatedRoute.params.subscribe(params => {
      this.servicio.getProducto(params['id']).subscribe((doc:any) => {
        this.producto.push({
          id: doc.data().id,
          nombre_producto: doc.data().nombre_producto,
          descripcion: doc.data().descripcion,
          marca: doc.data().marca,
          unidades: doc.data().unidades,
          precio: doc.data().precio,
          categoria: doc.data().categoria,
        })
      });
    });
  }


}
