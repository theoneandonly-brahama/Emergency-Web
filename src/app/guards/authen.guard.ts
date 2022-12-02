import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../services/authen.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private authService:AuthenService , private router: Router) {}
  canActivate(): boolean{
      if (!this.authService.getToken()) {  
        this.router.navigateByUrl("/");  
    }  
    return this.authService.getToken();
  }
  
}
