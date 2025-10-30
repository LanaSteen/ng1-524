import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

   ngOnInit(){
    this.count()
    this.age = 55
    this.title = "ng2"
  }

  printHEllo(){
    console.log("hello");
  }

  title = 'ng1';

  userName = "Jane";
  isDisabled = true

  isValid = false;
  age = 50
  showAgeUi = 0

  user = {
    name : "rame",
    age : 25
  }
  arr = [20,30,60,50];

  count(){
    for(let i of this.arr){

      console.log(i);
      
    }
  }

  showAge(){
     this.showAgeUi = this.age
  }

 
  
}

// 17 module 
// app.module

// 19 LTS   standalone 
// 20
// 21

let product = {
  name : "Laptop",
  price : 50
}

function sum(){

}