import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
