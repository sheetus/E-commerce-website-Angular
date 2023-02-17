import { ProductsService } from './../services/products.service';
import { CartService } from './../services/cart.service';
import { Product } from './../product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent   {
  constructor( private router :Router ,private cartService: CartService,private productDetail: ProductsService){}
  @Input() product ={
    id:0,
    title:'',
    price:0,
   
      rate: 0,
      count:0
  ,
  category:'',
  image:'',
  description:''
  };
  // @Output product= new EventEmitter();
 redirectToProductDetails(){
  this.router.navigate(['/product-details',this.product.id]);// here i used the method navigate to get me int the path //product-details and used this.id to get the specific id of the product 
  
 }
 redirectToCart(){
  // this.productDetail.getProductDetails().subscribe((res:any)=>{
    
  // })
  this.router.navigate(['/cart',this.product.id]);
 }
 add(){

 }
 addToCart( product:any){
this.cartService.addToCart(product)
 }

}
  


