import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalServiceService } from '../services/signal-service.service';
import { CommonModule } from '@angular/common';
import { AuthSigService } from '../services/auth-sig.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private signal : SignalServiceService, private authServ : AuthSigService
    ){

    effect(()=> {
      console.log(this.signal.nikname())
      this.userName = this.signal.nikname()
      this.isAuth =  this.authServ.isAuthorizd 
    })

  }

  ngOnInit(){

  }
userName = ""
rame = "active"


isAuth : any

logOut(){
   localStorage.removeItem("token")
   this.authServ.logout()
}


}
