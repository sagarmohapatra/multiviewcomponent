import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/appService/header.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  constructor(private router: Router ,private _navbar: HeaderService) {}
  back() {
    this.router.navigate(['/home']);
  }
  
  ngOnInit() {
    this._navbar.headerNav.next(false);
    this._navbar.goBackLink.next({text:'back to product',url:'product'});
  }
  ngOnDestroy(){
    this._navbar.headerNav.next(true)
    this._navbar.goBackLink.next({text:'',url:''});
  }
}
