import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
        : boolean | Observable<boolean> |   Promise<boolean>  {
            const isAuth = this.authService.getIsAuth();
            if(!isAuth){
                this.router.navigate(["/auth/login"]);
            }
            return isAuth;
    }

}