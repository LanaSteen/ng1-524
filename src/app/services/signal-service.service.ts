import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalServiceService {

  constructor() { }

  nikname = signal("")


  savenikname(name : string){
    this.nikname.set(name)
  }

}
