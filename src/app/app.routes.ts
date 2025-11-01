import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
   path : "",
   redirectTo : "home",
   pathMatch : "full"
  },
  {
    path : "home",
    loadComponent : () => import("./home/home.component").then(com => com.HomeComponent)
  },
    {
    path : "about/:id",
    loadComponent : () => import("./about/about.component").then(com => com.AboutComponent)
  },
    {
    path : "about",
    loadComponent : () => import("./about/about.component").then(com => com.AboutComponent)
  },
    {
    path : "contact",
    loadComponent : () => import("./contact/contact.component").then(com => com.ContactComponent)
  },
  // {
  //   path : "home",
  //   component : HomeComponent
  // },
  // {
  //   path : "about",
  //   component : AboutComponent
  // },
  // {
  //   path : "contact",
  //   component : ContactComponent

  // },
  {
    path : "**",  //ვაილდ ქარდი
    component : ErrorComponent
  }
];



// eager routing 
// lazy loading