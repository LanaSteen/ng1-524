import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 ngOnInit(){
    this.count()
    this.age = 0
    this.title = "ng2"
    console.log(this.product);
    
  }

  printHEllo(){
    console.log("hello");
  }

  title = 'ng1';

  userName = "Jane";
  isDisabled = true

  isValid = false;
  age = 55
  // age : any /// ცუდია
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
     console.log(`rame ${this.age}`);
     
  }


  user1 = new User

  product = new Product


}



///  string number boolean object null undefiend  enum interface


///   class


