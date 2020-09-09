import { Component } from '@angular/core';

import { ComprasService } from '../compras.service';

@Component({
  selector: 'meus-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  compras;

  constructor(
    private comprasService: ComprasService
  ) {
      console.log(this.comprasService.getCompras())
      this.compras = this.comprasService.getCompras();
  }

}