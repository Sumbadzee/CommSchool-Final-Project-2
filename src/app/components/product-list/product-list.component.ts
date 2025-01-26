import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule, FormsModule], 
  standalone: true,
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  onSearch() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}