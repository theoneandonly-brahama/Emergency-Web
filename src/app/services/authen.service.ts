import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http:HttpClient) { }

  getToken(){
    return true
    
    }
}
