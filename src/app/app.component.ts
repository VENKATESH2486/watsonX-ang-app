import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wx-ang';
}


// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';


// const routes: Routes = [
//   { path: '', component: HeaderComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent }
// ];

// @NgModule({
//   declarations: [
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
