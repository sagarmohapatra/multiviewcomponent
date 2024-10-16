import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
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
  declarations: [GalleryComponent],
  imports: [CommonModule,GalleryRoutingModule],
})
export class GalleryModule {}
