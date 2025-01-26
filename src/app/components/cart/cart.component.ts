import { Component, OnInit } from '@angular/core'; 
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cart = this.productService.getCart();
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(product: any): void {
    this.productService.removeFromCart(product);
    this.loadCart(); 
  }
}
