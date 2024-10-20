import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../appService/header.service';
import { GalleryItems } from '../appModals/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  constructor() {}
  
  ngOnInit() {
    
  }
  // gallery: any = true;
  // hide() {
  //   this.gallery = false;
}
