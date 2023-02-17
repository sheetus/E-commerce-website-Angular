import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product:any=[];
  public productTotal !: number;

  constructor(private cart: CartService) { }
  ngOnInit():void{
    this.cart.getProduct().subscribe(res=>{
      this.product=res;
      this.productTotal=this.cart.getTotalPrice();
    })
  }
  removeProduct(product :any){
this.cart.deleteCartProduct(product);
  }
}
