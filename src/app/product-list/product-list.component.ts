import { Component } from '@angular/core';

import { products } from '../products';

// add cart service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  
  // serviço
  addToCart(product) {
    window.alert('Produto adicionado ao Carrinho!');
    this.cartService.addToCart(product);
  }

  // construtor
  constructor(
    private cartService: CartService
  ) { }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/