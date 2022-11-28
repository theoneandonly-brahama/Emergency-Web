import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css']
})
export class RegisterrComponent implements OnInit {

  form=new FormGroup({
    nom:new FormControl(''),
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
    this.http.post('http://localhost:3000/api/remorqueur/store',this.form.getRawValue()).subscribe(()=>this.router.navigate(['loginR']))
    
    
    
  }
  initForm(){
    this.form = this.fb.group({
      nom: ["", Validators.required],
      adresse: ["", Validators.required],
      mail: ["", Validators.required],
      mdp: ["", Validators.required],
    })
  }

}
