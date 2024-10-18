import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { Gallery1Component } from './gallery-1/gallery-1.component';
import { Gallery2Component } from './gallery-2/gallery-2.component';

         const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,

    children: [
     
      { path: '', component: GalleryDetailComponent },
      { path: ':id', component: Gallery1Component },
      
    ],

  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
