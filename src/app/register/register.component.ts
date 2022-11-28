import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form=new FormGroup({
    nomAgence:new FormControl(''),
    adresse:new FormControl(''),
    mail:new FormControl(''),
    mdp:new FormControl('')
  })
  constructor(private router: Router,private fb:FormBuilder,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.initForm()
    
  }
  toList(){
    console.log(this.form.value)
    this.http.post('http://localhost:3000/api/ambulance/store',this.form.getRawValue()).subscribe(()=>this.router.navigate(['loginA']))
    
    
    
  }
  initForm(){
    this.form = this.fb.group({
      nomAgence: ["", Validators.required],
      adresse: ["", Validators.required],
      mail: ["", Validators.required],
      mdp: ["", Validators.required],
    })
  }
}
