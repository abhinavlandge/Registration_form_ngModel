import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
email = "";
password = "";
firstName = "";
lastName = "";
date= "";
mobNo = "";
altMob = "";
gender = "";
address = "";
feedBack = "";
inLoginSuccess = false;

submitButton(){
  console.log("You Entered Email : ", this.email);
  console.log("You Entered Password : ", this.password);
  console.log("You Entered first name : ", this.firstName);
  console.log("You Entered last name : ", this.lastName);
  console.log("You Entered Date : ", this.date);
  console.log("You Entered Mobile no. : ", this.mobNo);
  console.log("You Entered Alternte  Mobile no. : ", this.altMob);
  console.log("You Entered Gender : ", this.gender);
  console.log("You Entered Adress: ", this.address);
  console.log("You Entered Feedback : ", this.feedBack);
  this.inLoginSuccess = true;
}
  constructor(){
  
  }


}
