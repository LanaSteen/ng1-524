import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalServiceService } from '../services/signal-service.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private signal : SignalServiceService){

    effect(()=> {
      console.log(this.signal.nikname())
      this.userName = this.signal.nikname()
    }  )

  }

  ngOnInit(){

  }
userName = ""
rame = "active"



}
