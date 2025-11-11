import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnText! :string 
  @Input() altText = "saba"

  @Output()  btnInfo : EventEmitter<string> = new EventEmitter
  @Output()  btnInfo2 : EventEmitter<string> = new EventEmitter


  ngOnInit(){
      console.log(this.btnText);
  }


  sendToParent(){
    //  this.btnInfo.emit(25)
     this.btnInfo.emit(this.btnText)
  }
  

}
