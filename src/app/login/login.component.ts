import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor (private routes : Router){}
  values = ['Basic','Premium'];
  newVal:String='Basic';
  public onChange(event): void {  // event will give you full breif of action
    this.newVal = event.target.value;
    console.log(this.newVal);
  }

  changeUser()
  {
   console.log('/'+this.newVal)
     this.routes.navigateByUrl('/'+this.newVal);
  }
  removeTextbox()
  {
    console.log("ss");
  }

  ngOnInit() {
  }

}
