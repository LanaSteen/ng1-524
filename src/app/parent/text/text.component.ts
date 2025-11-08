import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {

  @Input() fromparent!:number
  @Input()  rame =""

  
  ngOnInit(){

  }

  ngOnChanges(){
     console.log(this.fromparent);
     
  }

}
