import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ambulance } from '../models/user/ambulance';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    mail:new FormControl(''),
    mdp:new FormControl('')
  })
  
  constructor(private router: Router,private fb:FormBuilder,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.initForm()
    
  }
  toList(){
    console.log(this.form.getRawValue())
    this.http.post('http://localhost:3000/api/ambulance/login',this.form.getRawValue()).subscribe(()=>this.router.navigate(['listes_A']))
    
    
    
  }
  initForm(){
    this.form = this.fb.group({
      mail: ["", Validators.required],
      mdp: ["", Validators.required],
    })
  }

}
