import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
public productNumber:number=0;
  constructor(private cart:CartService){

  }
  ngOnInit(){
    this.cart.getProduct().subscribe((res:any)=>{
this.productNumber=res.length;
    })
  }
}
