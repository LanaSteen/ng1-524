import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private routparam : ActivatedRoute){
      this.routparam.params.subscribe(data => {
        console.log(data["id"])
        this.id = data["id"]
      })
  }

  ngOnInit(){
     if(this.id !=0){
        console.log(this.id);
     
        
     }
  }
  id = 0
  




}



