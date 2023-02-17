import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent,
  },
  {
    path:'product-card',
    component:ProductcardComponent,
  } , {
    path:'product-details/:id',// /:id to make it dynamic 
    component:ProductDetailsComponent,
  } ,  {
    path:'register',
    component:RegisterComponent,
  } , {
    path:'login',
    component:LoginComponent,
  }
  ,{
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuardGuard],
  }
  , {path:'**',
  component:NotfoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
