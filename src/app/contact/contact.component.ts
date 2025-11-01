import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private router : Router){

  }


 goToAbout(){
  this.router.navigateByUrl("/about/50")
 }

 user = new User
 usersArr : User[] = []

 saveUser(){
   this.usersArr.push(this.user)
    console.log( this.usersArr)
    
 }

}
