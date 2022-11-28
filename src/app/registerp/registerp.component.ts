import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerp',
  templateUrl: './registerp.component.html',
  styleUrls: ['./registerp.component.css']
})
export class RegisterpComponent implements OnInit {

  form=new FormGroup({
    nomPoste:new FormControl(''),
    mail:new FormControl(''),
    mdp:new FormControl('')
  })
  constructor(private router: Router,private fb:FormBuilder,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.initForm()
    
  }
  toList(){
    console.log(this.form.value)
    this.http.post('http://localhost:3000/api/police/store',this.form.getRawValue()).subscribe(()=>this.router.navigate(['loginP']))
    
    
    
  }
  initForm(){
    this.form = this.fb.group({
      nomPoste: ["", Validators.required],
      
      mail: ["", Validators.required],
      mdp: ["", Validators.required],
    })
  }

}
