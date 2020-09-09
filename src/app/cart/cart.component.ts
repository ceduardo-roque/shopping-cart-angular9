import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private comprasService: ComprasService
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Sua compra foi concluída.', customerData);
    this.comprasService.addCompra(customerData, this.items);
    window.alert('Sua compra foi concluída. Clique no menu "Meus Pedidos" para visualizar seus pedidos.');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }
}