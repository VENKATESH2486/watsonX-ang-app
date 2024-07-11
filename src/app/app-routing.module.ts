import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ApplicationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'signout', component: SignupComponent},
  { path: 'login', component: HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

