import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private toast:NgToastService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedReq).pipe(
      catchError((errorData:any) => {
        if(errorData.status===404){
          console.log("error 404");
          this.toast.error({
            detail: 'ERROR',
            summary: 'Something Went Wrong ERROR 404',
            duration: 5000,
          });
        }
        if(errorData.status===502){
          console.log("error 502")
          this.toast.error({
            detail: 'ERROR',
            summary: 'Something Went Wrong ERROR 502',
            duration: 5000,
          });
        }
        if(errorData.status===403){
          console.log("error 403")
          this.toast.error({
            detail: 'ERROR',
            summary: 'Something Went Wrong ERROR 403',
            duration: 5000,
          });
        }
        if(errorData.status===401){
          console.log("error 401")
          this.toast.error({
            detail: 'ERROR',
            summary: 'Something Went Wrong ERROR 401',
            duration: 5000,
          });
        }
        return throwError(errorData);
      })
    )
  }
}
