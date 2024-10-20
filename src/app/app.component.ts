import { Component } from '@angular/core';
import { HeaderService } from './appService/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multiviewComponent';

  goBackLink: any ;
  headerNav: any = true;
  headerLogin: any = true;
  headerContact: any = true;
  logedInUser: any = "";
  imghide:any=false
  email: any = 'kumarmohapatra5@gmail.com';
  constructor(private _header: HeaderService, private router:Router) {
    // for cobtactDetail
    this._header.headerContact.subscribe((res) => {
      this.headerContact = res;
    });
    this._header.headerNav.subscribe((headres) => {
      this.headerNav = headres;
    });

    this._header.goBackLink.subscribe((gobackres) => {
      this.goBackLink = gobackres;
    });

    this._header.headerLogin.subscribe((gobackres) => {
      this.headerLogin = gobackres;
    });
    this._header.logedInUser.subscribe((gobackres) => {
      this.logedInUser = gobackres;
    });
    this._header.imghide.subscribe((gobackres) => {
      this.imghide = gobackres;
    });
  }
  logout(){
    this._header.logedInUser.next('')
    this.router.navigate(["signin"])
    this._header.headerNav.next(false)
    this._header.imghide.next(false)
  }
}
