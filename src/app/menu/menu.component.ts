import { Component } from '@angular/core';
import { Product2 } from '../models/product2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {



  productObj : Product2 = new Product2


  productArr : Product2[] = []
  isVisibal = false


  save(){

    this.productArr.push(this.productObj)
    console.log(this.productArr);
    this.productObj = new Product2
  }


  show(){
   this.isVisibal == true ? this.isVisibal = false : this.isVisibal = true
  }

  dlete(ind : number){
     this.productArr.splice(ind,1)
  }

}
