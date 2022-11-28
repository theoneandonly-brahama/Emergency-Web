import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.css']
})
export class LoginrComponent implements OnInit {

  form=new FormGroup({
    mail:new FormControl(''),
    mdp:new FormControl('')
  })
  constructor(private router: Router,private fb:FormBuilder,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.initForm()
    
  }
  toList(){
    console.log(this.form.value)
    this.http.post('http://localhost:3000/api/remorqueur/login',this.form.getRawValue()).subscribe(()=>this.router.navigate(['listes_R']))
    
    
    
  }
  initForm(){
    this.form = this.fb.group({
      mail: ["", Validators.required],
      mdp: ["", Validators.required],
    })
  }

}
