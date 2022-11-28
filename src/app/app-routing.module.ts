import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPComponent } from './data-p/data-p.component';
import { DataRComponent } from './data-r/data-r.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { LoginpComponent } from './loginp/loginp.component';
import { LoginrComponent } from './loginr/loginr.component';
import { RegisterComponent } from './register/register.component';
import { RegisterpComponent } from './registerp/registerp.component';
import { RegisterrComponent } from './registerr/registerr.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"loginA",component:LoginComponent},
{path:"loginP",component:LoginpComponent},
{path:"loginR",component:LoginrComponent},
{path:"registerA",component:RegisterComponent},
{path:"registerP",component:RegisterpComponent},
{path:"registerR",component:RegisterrComponent},
{path:"listes_A",component:DataComponent},
{path:"listes_P",component:DataPComponent},
{path:"listes_R",component:DataRComponent},
{path:"location",component:LocationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
