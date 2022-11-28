import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideLogout:boolean=false
  

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  

}
