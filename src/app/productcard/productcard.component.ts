import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  constructor( private router :Router){}
  @Input() product ={
    createdAt:'',
    name:'',
    image:"",
    rate:0,
    count:0,
    description:"",
    price:0,
    reviews:[
       "",
       "",
       ""
    ],
    id:0 
 }
 redirectToProductDetails(){
  this.router.navigate(['/product-details',this.product.id]);// here i used the method navigate to get me int the path //product-details and used this.id to get the specific id of the product 
  
 }
 redirectToCart(){
  this.router.navigate(['/cart',this.product.id]);
 }
  }


