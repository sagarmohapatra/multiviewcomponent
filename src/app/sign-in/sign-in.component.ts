import { Component } from '@angular/core';
import { HeaderService } from '../appService/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private _header:HeaderService,private router:Router) {}
  onloggedIn(username: any,password:any) {
    // event.preventDefault()
    // alert(username.value);
    if(password.value==='123'){
      this._header.logedInUser.next(username.value)
      this._header.imghide.next(true)
      this._header.headerNav.next(true)
    }else{
      alert("plz write correct value")
    }
    this.router.navigate(['home'])
  }
}
