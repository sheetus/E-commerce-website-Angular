import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {




   }
   getProductsList(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductDetails(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id );
  }
}
