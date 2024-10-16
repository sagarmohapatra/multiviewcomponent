import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('../app/home/home.module').then((m)=>m.HomeModule)

  },
  {
    path:"",
    loadChildren:()=>import('../app/about/about.module').then((m)=>m.AboutModule)

  },
  {
    path:"",
    loadChildren:()=>import('../app/gallery/gallery-routing.module').then((m)=>m.GalleryRoutingModule)

  },
  {
    path:"",
    loadChildren:()=>import('../app/product/product.module').then((m)=>m.ProductModule)

  },
  {
    path:"",
    loadChildren:()=>import('../app/contact/contact.module').then((m)=>m.ContactModule)


  },
  {
    path:"",
    loadChildren:()=>import('../app/sign-in/sign-in.module').then((m)=>m.SignInModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
