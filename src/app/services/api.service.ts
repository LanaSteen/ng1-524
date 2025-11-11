import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  getAll(url : string){
     return  this.http.get(url)
  }



  postObj(url : string, obj : any){

    return this.http.post(url, obj)
  }


  deleteObj(url : string){
    return this.http.delete(url)
  }


}




//  return   this.http.post(url, obj, {responseType :'text'})