import { ProductsService } from './../services/products.service';
import { Product } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
productList:any[]=[]
 
// @Output product= new EventEmitter();
constructor(private productservice:ProductsService){

}
ngOnInit(){
 this.getProductList()
}
getProductList(){
   this.productservice.getProductsList().subscribe((res:any)=>{
this.productList=res;
this.productList.forEach((prod:any) =>{
   Object.assign(prod,{quantity:1, total:prod.price})
})
// console.log(res)
   })

   }
   addToCart(prod:any){
console.log(prod);
   }
};

