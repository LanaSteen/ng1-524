import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-error',
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
 
  // private  public  protected 

  constructor( private router : Router ){
    
  }

  ngOnInit(){

  }


goHome(){
   this.router.navigateByUrl("/home")
}

 name = "fdsdgfhjfsdfd"

}
