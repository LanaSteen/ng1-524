import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ButtonComponent } from "../button/button.component";
import { Category } from '../models/category';
import { CommonModule, CurrencyPipe, LowerCasePipe, UpperCasePipe, ViewportScroller } from '@angular/common';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private com : CommonService, private scr : ViewportScroller){}

 ngOnInit(){
    this.count()
    this.age = 0
    this.title = "ng2"
    console.log(this.product);
    this.homeVar = this.com.servVar
    
  }

  country = "GEORGIA"
  amount = 100

  today = new Date()

  scrolltoContact(){
    this.scr.scrollToAnchor("contact")
  }



  lowerCaseMyFn(name : string){
      debugger
     return name.toLowerCase()
  }
 trimCaseMyFn(rame : string){
   return rame.trim()
 }
  homeVar = ""

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
    //  debugger

      console.log(i);
      
    }
  }

  showAge(){
     this.showAgeUi = this.age
     console.log(`rame ${this.age}`);
     
  }


  user1 = new User

  product = new Product
  
  getInfoFromChild(nameFromChild : string){
    this.cartegryArr = this.cartegryArr.filter(el => el.name != nameFromChild)
  }

  cartegryArr : Category[] =
  [
  {
    id: 1,
    name: "dsddc"
  },
  {
    id: 2,
    name: "Soups"
  },
  {
    id: 3,
    name: "Chicken-Dishes"
  },
  {
    id: 4,
    name: "Beef-Dishes"
  },
  {
    id: 5,
    name: "Seafood-Dishes"
  },
  {
    id: 6,
    name: "Vegetable-Dishes"
  },
  {
    id: 7,
    name: "Bits&Bites"
  },
  {
    id: 8,
    name: "On-The-Side"
  }
]


}



///  string number boolean object null undefiend  enum interface


///   class


