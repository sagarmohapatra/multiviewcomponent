import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { Gallery1Component } from './gallery-1/gallery-1.component';
import { Gallery2Component } from './gallery-2/gallery-2.component';
import { Gallery3Component } from './gallery-3/gallery-3.component';
import { Gallery4Component } from './gallery-4/gallery-4.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
// import { GalleryComponent } from './gallery.component';
// import { RouterModule, Routes } from '@angular/router';
// import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

// const routes: Routes = [
//   {
//     path: 'gallery',
//     component: GalleryComponent,
//     children: [{ path: 'gallerydetail', component: GalleryDetailComponent }],
//   },
// ];

@NgModule({
  declarations: [GalleryComponent, Gallery1Component, Gallery2Component, Gallery3Component, Gallery4Component,GalleryDetailComponent],
  imports: [CommonModule,GalleryRoutingModule],
})
export class GalleryModule {}
