import { Component, OnInit } from '@angular/core';
declare const L :any

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{

  constructor() { }
 

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log('location is not supported')
    }
    navigator.geolocation.getCurrentPosition((position) =>{
      const coords=position.coords
      console.log(
        'lat: ',position.coords.latitude,',lon:', position.coords.longitude
        )
      
        let map = L.map('map').setView([coords.latitude, coords.longitude], 13)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    }
      )
      this.watchPosition()
  }
  watchPosition(){
    let deslat=0;
    let deslon=0;
    let id =navigator.geolocation.watchPosition(
      (position)=>{
        console.log('lat: ',position.coords.latitude,',lon:', position.coords.longitude)
        if(position.coords.latitude==deslat){
          navigator.geolocation.clearWatch(id)
        }
      },(err)=>{console.log(err)},{
        enableHighAccuracy:true,timeout:5000,maximumAge:0
      }
    )
  }

}
