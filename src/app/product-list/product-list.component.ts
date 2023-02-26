import { CounterService } from './../services/counter.service';
import { ProductsService } from './../services/products.service';
import { Product } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: any[] = [];
  cart: any[] = [];
  productNumber=0;

  // @Output product= new EventEmitter();
  constructor(private productservice: ProductsService, private counter:CounterService) {}
  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.productservice.getProductsList().subscribe((res: any) => {
      this.productList = res;
      this.productList.forEach((prod: any) => {
        Object.assign(prod, { quantity: 1, total: prod.price });
      });
      // console.log(res)
    });
  }
  addToCart(prod: any) {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      let isExist=this.cart.find(item =>item.id == prod.id)
      if(isExist){
         alert("You hav already added this product");
         
      
    } else {
      this.cart.push(prod);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.counter.updateCounter(++this.productNumber)
    }
    }
  }
}
