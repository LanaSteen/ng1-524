import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {



  @Input()   btntext: string = "test"
  @Output()  fromchild : EventEmitter<number> = new EventEmitter


  

 sendInfotoparent(){
   this.fromchild.emit(25)
 }

  // btntext = "test"

}
