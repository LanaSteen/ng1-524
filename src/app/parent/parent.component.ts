import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";
import { TextComponent } from "./text/text.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, TextComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {


  numb = 0

  name = "vinme"

  testFromparent = "rame"
   print(age : number){
    console.log(age);
    
   }

   grow(){
    this.numb+=1
   }

}
