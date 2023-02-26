import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product:any=[];
  cart:any[]=[]
  public productTotal !: number;
productNumber=0;

  constructor(private  cartCounter:CounterService , cart:CartComponent) { }
  ngOnInit():void{
    this.getCartProducts();
    // this.cart.getProduct().subscribe(res=>{
    //   this.product=res;
    //   this.productTotal=this.cart.getTotalPrice();
    // })
  }
  getCartProducts(){
    if ('cart' in localStorage) {
      this.cart= JSON.parse(localStorage.getItem('cart')!);
  }
console.log(this.cart);
  }
  addQuantity(produdQ:any){
    this.cartCounter.updateCounter(++this.productNumber * produdQ);
  }
  // removeProduct(product :any){
  //   this.cart.deleteCartProduct(product);
  //     }
}
