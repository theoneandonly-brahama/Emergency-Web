import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataComponent } from './data/data.component';
import { LocationComponent } from './location/location.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpComponent } from './loginp/loginp.component';
import { LoginrComponent } from './loginr/loginr.component';
import { RegisterpComponent } from './registerp/registerp.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { DataPComponent } from './data-p/data-p.component';
import { DataRComponent } from './data-r/data-r.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DataComponent,
    LocationComponent,
    LoginpComponent,
    LoginrComponent,
    RegisterpComponent,
    RegisterrComponent,
    DataPComponent,
    DataRComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
