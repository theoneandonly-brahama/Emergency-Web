import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';
import { Alerts } from '../models/alerts';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-p',
  templateUrl: './data-p.component.html',
  styleUrls: ['./data-p.component.css']
})
export class DataPComponent implements OnInit {

  constructor(private matDialog:MatDialog,private dt:DataService, private http:HttpClient, private router: Router) { }
  
  
  alerts:Alerts[]=[
  ]
  @Input() type?:String;

  ngOnInit(): void {
    this.getAlerts()
  }

 getAlerts(){
  this.dt.getAlertsP().subscribe(data => {
    
    this.alerts = data.response
    console.log(this.alerts)
  })
 
 }
  openTempDialog(){
    this.matDialog.open(
    LocationComponent );
  }

  logout(){

    this.http.post('http://localhost:3000/api/police/logout', {}).subscribe(()=>this.router.navigate(['home']))
  }

}
