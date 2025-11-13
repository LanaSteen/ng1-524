import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../services/common.service';
import { SignalServiceService } from '../services/signal-service.service';

@Component({
  selector: 'app-test-signal',
  imports: [FormsModule],
  templateUrl: './test-signal.component.html',
  styleUrl: './test-signal.component.scss'
})
export class TestSignalComponent {

  constructor(private common : CommonService, private signalServ : SignalServiceService){
  }



  count = signal(0)

  userName = signal("")

  inputUserName = ""
 
  saveUser(){
    this.userName.set(this.inputUserName)
    console.log(this.userName());
    this.common.userName = this.userName()
    console.log(this.common.userName);



    this.signalServ.savenikname(this.inputUserName)
    
    
  }



  up(){
    this.count.update(val => val +1)
  }

  down(){
    this.count.update(val => val -1)
  }



}


// set
// update
// effect

// subject   BehaviorSubject