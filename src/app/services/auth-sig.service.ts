import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSigService {

  constructor() { }

  isAuthorizd = signal(false)

  login(){
    this.isAuthorizd.set(true)
  }
  logout(){
    this.isAuthorizd.set(false)
  }
}
