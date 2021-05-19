import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HTTP_CODE } from '../core/constants';
import { UserService } from './../entities/user';
import { TATAMI_HEADER_TOKEN, TATAMI_LOCAL_TOKEN } from './../core/constants';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    public constructor(
        private userService: UserService
        , protected router: Router
    ) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem(TATAMI_LOCAL_TOKEN);
        if (token) {
            req = req.clone({
                setHeaders: {
                    [TATAMI_HEADER_TOKEN]: token
                }
            });
        }

        return next.handle(req).pipe(
            catchError(err => this.handleErrorResponse(err))
        );
    }

    private handleErrorResponse(err) {
        if (err instanceof HttpErrorResponse) {
            // to do add modalService
            switch (err.status) {
                case HTTP_CODE.BAD_REQUEST:
                    console.error('HTTP-Interceptor Response :: Bad request', err);
                    break;
                case HTTP_CODE.NOT_FOUND:
                    console.error('HTTP-Interceptor Response :: Not Found', err);
                    break;
                case HTTP_CODE.UNAUTHORIZED:
                    console.error('HTTP-Interceptor Response :: Unauthorized ', err);
                    this.userService.logout();
                    this.router.navigate(['login']);
                    break;
                case HTTP_CODE.INTERNAL_SERVER_ERROR:
                    console.error('HTTP-Interceptor Response :: Internal Server Error ', err);
                    break;
                case HTTP_CODE.BAD_GATEWAY:
                    console.error('HTTP-Interceptor Response :: Bad Gateway - Maybe Backend server is down ', err);
                    break;

            }
        }
        return throwError(err);
    }

}
