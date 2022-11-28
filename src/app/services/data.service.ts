import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alerts } from '../models/alerts';
import { Observable } from 'rxjs';



const URL ="http://127.0.0.1:3000/api/"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAlertsP():Observable<any>{
    return this.http.get(URL +"alert/police_alerts")
  }
  getAlertsR():Observable<any>{
    return this.http.get(URL +"alert/remorq_alerts")
  }
  getAlertsA():Observable<any>{
    return this.http.get(URL +"alert/ambulance_alerts")
  }
  updateAlerts(alert:Alerts):Observable<any>{
    return this.http.post(URL + "/update",alert)
  }
  destroyAlerts(alerts:Alerts):Observable<any>{
    return this.http.post(URL + "/destroy",alerts)
  }
  
  
}
