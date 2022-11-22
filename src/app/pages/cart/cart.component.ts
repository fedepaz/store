import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Zapas",
        price: 4500,
        quantity: 3,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Zapas",
        price: 6500,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Zapas",
        price: 14500,
        quantity: 1,
        id: 1,
      }
    ]
  };

  datasource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService) { };

  ngOnInit(): void {
    this.datasource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);

  }

  getQuantity(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

}
