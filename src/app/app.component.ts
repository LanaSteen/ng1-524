import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ngOnInit(){
    this.count()
    this.title = "ng2"
  }


  title = 'ng1';

  userName = "Jane";

  isValid = false;
  age = 50

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