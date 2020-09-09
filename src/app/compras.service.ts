import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComprasService {
  compras = [];

  constructor(
    private http: HttpClient
  ) {}


  addCompra(cliente, produtos) {
    var compra = {
        name: cliente.name,
        address: cliente.address, 
        produtos: produtos
    };
    this.compras.push(compra);
  }

  getCompras() {
    return this.compras;
  }
}