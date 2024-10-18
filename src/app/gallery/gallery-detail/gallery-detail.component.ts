import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryItems } from 'src/app/appModals/gallery';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
})
export class GalleryDetailComponent {
  constructor(private _navbar: HeaderService,private router:Router,private gallery: GalleryItems) {}
  galleryImages: any = [];
  ngOnInit() {
    this._navbar.headerNav.next(false);
    this._navbar.goBackLink.next({text:'back to gallery',url:'gallery'});
    this.galleryImages = this.gallery.galleryImages;
    console.log(this.galleryImages);
    
  }
  ngOnDestroy(){
    this._navbar.headerNav.next(true)
    this._navbar.goBackLink.next({text:'',url:''});
  }
  // routes(){
  //    this.router.navigate(['gallery/gallery1'])
  // }

 
}
