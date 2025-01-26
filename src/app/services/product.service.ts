import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Full-Face Helmet', price: 299.95, image: 'https://i.pinimg.com/736x/17/b0/fb/17b0fb382b2526607f59b30a98cab900.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 2, name: 'Riding Gloves', price: 39.95, image: 'https://i.pinimg.com/736x/c4/ab/5b/c4ab5b852ef40010b4e43fcc9c18fcfa.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 3, name: 'Riding Jacket', price: 149.95, image: 'https://i.pinimg.com/736x/88/b4/3b/88b43b3ae6f970eeff49a648eb6c0f8c.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 4, name: 'Knee Guards', price: 49.95, image: 'https://i.pinimg.com/236x/5c/c6/de/5cc6deba0288d3b51a3ac856b8f03a67.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 5, name: 'Elbow Guards', price: 29.95, image: 'https://i.pinimg.com/736x/d1/99/54/d19954758db6ff8b7722f64fb5507251.jpg', description: 'Resin Bike Motorcycle Stickers Compatible with BMW R 1300 GS TROPHY 2023-2024. Swingarm Gimbal Protection from Bumps and Scratches, Resin Stickers with 3D Effect Made in Italy' },
    { id: 6, name: 'Motorbike Engine Oil', price: 24.95, image: 'https://m.media-amazon.com/images/I/51gbCL3LoiL._AC_UL480_FMwebp_QL65_.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 7, name: 'Motorbike Air Filter', price: 14.95, image: 'https://m.media-amazon.com/images/I/5103JkvjUSL._AC_UL480_FMwebp_QL65_.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 8, name: 'Mountain Bike Grip', price: 9.95, image: 'https://m.media-amazon.com/images/I/71IdXDN8mYL._AC_UL480_FMwebp_QL65_.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 9, name: 'Neck Gaiter for Riders', price: 14.95, image: 'https://m.media-amazon.com/images/I/71CtBE5iLpL._AC_UL480_FMwebp_QL65_.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 10, name: 'Riding Goggles', price: 24.95, image: 'https://i.pinimg.com/236x/88/2e/41/882e4150ac86e2e4db749179cd262c94.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 11, name: 'Motorbike Brake Caliper', price: 49.95, image: 'https://i.pinimg.com/236x/7d/ad/26/7dad2687a65230392d5afb690a71b204.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
    { id: 12, name: 'Motorbike Electric Motor', price: 199.95, image: 'https://i.pinimg.com/236x/ef/90/b1/ef90b1a87e57298d428e892ecc2fbb7a.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ducimus nisi eligendi quisquam porro laudantium corrupti quod sint repellendus eos doloremque accusamus et ea, inventore, at suscipit sed adipisci quidem? Eligendi eveniet laborum ipsum ex omnis placeat quam quo recusandae quaerat voluptatibus? Ipsa laboriosam optio temporibus numquam quis qui.' },
  ];
  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getProductById(id: string | null) {
    return this.products.find(p => p.id.toString() === id);
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter(p => p !== product);
  }
}
