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
import { AuthenGuard } from './guards/authen.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPoliceComponent } from './admin-police/admin-police.component';
import { AdminRemorqueurComponent } from './admin-remorqueur/admin-remorqueur.component';
import { AdminAmbulanceComponent } from './admin-ambulance/admin-ambulance.component';
const routes: Routes = [{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"loginA",component:LoginComponent},
{path:"loginP",component:LoginpComponent},
{path:"loginR",component:LoginrComponent},
{path:"registerA",component:RegisterComponent},
{path:"registerP",component:RegisterpComponent},
{path:"registerR",component:RegisterrComponent},
{path:"listes_A",component:DataComponent,canActivate:[AuthenGuard]},
{path:"listes_P",component:DataPComponent,canActivate:[AuthenGuard]},
{path:"listes_R",component:DataRComponent,canActivate:[AuthenGuard]},
{path:"location",component:LocationComponent},
{path:"admin",component:AdminLoginComponent, children: [
  {
    path:'police', component: AdminPoliceComponent
  },
  {
    path:'remorqueur', component: AdminRemorqueurComponent
  },
  {
    path:'ambulance', component: AdminAmbulanceComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
