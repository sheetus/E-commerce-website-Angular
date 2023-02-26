import { Product } from './../product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartProductList:any=[];
private productList= new BehaviorSubject<any[]>([]);
public productListContent=this.productList.asObservable();
getProduct(){
  this.productList.asObservable()
}

  setProduct(product :any){
    this.cartProductList.push(...product);
    this.productList.next(product);
  }
  // addToCart(product :any){
  //   this.cartProductList.push(product);
  //   this.productList.next(this.cartProductList);
  //  this.getTotalPrice();
  //  console.log(this.cartProductList);
  // }
  getTotalPrice(): number{
    let subTotal=0;
    this.cartProductList.map((pro:any) => {
     subTotal+=pro.total;

      
    });
    return subTotal;
  }
  deleteCartProduct(product:any){
    this.cartProductList.map((prod:any,index:any) => {
      if(product.id===prod.id){
        this.cartProductList.splice(index,1);
      }
    });
  }
}
