import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as ENV } from '@environment';
import { Injectable } from "@angular/core";


@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({url: `${ENV.server}${req.url}`, headers: req.headers.set('Content-Type', 'application/json')})
        return next.handle(apiReq);
    }
}