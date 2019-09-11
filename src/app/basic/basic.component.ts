import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  saveIP = new FormGroup({
    ip1 : new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ip2 : new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ip3 : new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ip4 : new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ip5 : new FormControl('', [Validators.required,Validators.maxLength(15)]),
  })


  maxBasic=[1,2,3,4,5];
  iter =1;
  IP = [];

  constructor() { }

  ngOnInit() {
  }
  addTextbox()
  {
    this.iter ++;

  }
  removeTextbox()
  {
    if(this.iter > 1)
    {
      this.iter --;
    }
    
  }
  IPSave()
  {
    
    this.IP=[];
    let q=0;
    Object.keys(this.saveIP.controls).forEach(key => {
     q++;
      if(q<=this.iter){
      
        this.IP.push(this.saveIP.controls[key].value)
      }

    }); 
    console.log(this.IP);
    // this.saveIP.value.ip1;
    // this.saveIP.value.ip2;
    // this.saveIP.value.ip3;
    // this.saveIP.value.ip4;
    // this.saveIP.value.ip5;
  }
  

}
