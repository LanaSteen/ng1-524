import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Product2 } from '../models/product2';


@Component({
  selector: 'app-parent2',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.scss'
})
export class Parent2Component {


  constructor(private commonFun : CommonService, private api : ApiService){

  }


  ngOnInit(){
    this.commonFun.test()

    this.api.getAll("https://restaurant.stepprojects.ge/api/Products/GetAll")
         .subscribe(data => console.log(data))
  }

 productArr : Product2[] = []

  userName = ""


deleteProduct(){

  this.api.deleteObj("https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/14")
  .subscribe(resp => console.log(resp)
  )

}
  



  postCart(){
    this.api.postObj("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
    quantity: 100,
    price: 1000,
    productId: 1
    }).subscribe(resp => console.log(resp))

  }

  parentFunc(info : any){
    console.log(info);
    
  }







  saveUseer(){
     this.commonFun.servVar  =  this.userName
  }
}



// promise   =>  then
// observable   => subscribe







// {
//   "quantity": 0,
//   "price": 0,
//   "productId": 0
// }