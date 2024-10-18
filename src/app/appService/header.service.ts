import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  headerContact=new BehaviorSubject(false)
  // hidegallery=new BehaviorSubject(true)
  headerNav=new BehaviorSubject(false)
  goBackLink=new BehaviorSubject({text:'',url:''})
  headerLogin=new BehaviorSubject(true)
  logedInUser= new BehaviorSubject('')
  imghide=new BehaviorSubject(false)
}
