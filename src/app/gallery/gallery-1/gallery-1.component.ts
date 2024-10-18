import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from 'src/app/appModals/gallery';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-gallery-1',
  templateUrl: './gallery-1.component.html',
  styleUrls: ['./gallery-1.component.scss'],
})
export class Gallery1Component {
  constructor(
    private gallery: GalleryItems,
    private _activatedRoute: ActivatedRoute
  ) {}
  galleryImage: any = [];
  selectedItem: any;
  id: any;
  ngOnInit() {
    this.galleryImage = this.gallery.galleryImages;
    console.log(this.galleryImage);
    // this.selectedItem=this.gallery.galleryImages[5-1]
    console.log(this.selectedItem);
    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      this.selectedItem = this.gallery.galleryImages[this.id - 1];
    });
  }
}
