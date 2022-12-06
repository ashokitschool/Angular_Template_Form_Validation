import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg:string="";
   
  submit(form:any){    
    console.log(form.firstName);
    console.log(form.lastName);
    console.log(form.comment);
    this.msg="Contact Form Submitted For "+form.firstName;
  }
}
