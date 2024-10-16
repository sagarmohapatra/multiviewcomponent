import { Component } from '@angular/core';
import { HeaderService } from '../appService/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
constructor(private _header:HeaderService){

}
ngOnInit(){
  this._header.headerContact.next(true)
}
ngOnDestroy(){
  this._header.headerContact.next(false)
}
}
