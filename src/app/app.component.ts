import { Component } from '@angular/core';
import { HeaderService } from './appService/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multiviewComponent';

  goBackLink: any = false;
  headerNav: any = true;
  headerLogin: any = false;
  headerContact: any = true;
  logedInUser: any = true;
  email:any = 'kumarmohapatra5@gmail.com';
  constructor(private _header: HeaderService) {
    // for cobtactDetail
    this._header.headerContact.subscribe((res) => {
      this.headerContact = res;
    });
  }
}
