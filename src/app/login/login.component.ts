import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { AuthSigService } from '../services/auth-sig.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private api : ApiService, private authSev : AuthSigService){

  }


 
  logIn(loginForm : any){

     console.log(loginForm.value);
     
    this.api.postObj("https://rentcar.stepprojects.ge/api/Users/login"
      ,loginForm.value)
      .subscribe((resp:any)=> {
        console.log(resp.token);
        localStorage.setItem("token", resp.token)
        this.authSev.login()
      })
  }



  // 

}
