import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); 
    if (productId) {
      this.product = this.productService.getProductById(productId); 
    }
  }

  addToCart(product: any): void {
    this.productService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
