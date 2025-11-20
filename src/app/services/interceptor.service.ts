import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ErrorDialodService } from './error-dialod.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
       return  next.handle(req)
       .pipe(
        catchError( (err : any) => {
              if(err.status == 400){
                console.log("bad request");
                this.errserv.setErrMessage("bad request")
                this.errserv.showDialog()
              }
               else if(err.status == 404){
                console.log("not fountd");
                this.errserv.setErrMessage("not fountd")
                this.errserv.showDialog()
              }
             else if(err.status == 401){
                console.log("user is not authorized");
                this.errserv.setErrMessage("user is not authorized")
                this.errserv.showDialog()
              }
              else if(err.status == 500){
                console.log("internal server error");
              }
            
              return  throwError(() => err.status)
              
        })
       )
  }

  constructor(private errserv : ErrorDialodService) { }
}
