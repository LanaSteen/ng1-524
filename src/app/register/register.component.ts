import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalServiceService } from '../services/signal-service.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private sig : SignalServiceService){}


  userName = ""
  reg(){

    this.sig.savenikname(this.userName)

  }
}
