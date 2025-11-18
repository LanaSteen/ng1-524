import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './guards/auth.guard';

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
  {
    path : "menu",
    loadComponent : () => import("./menu/menu.component").then(com => com.MenuComponent),
    canActivate : [authGuard]
  },
  {
    path : "parent",
    loadComponent : () => import("./parent/parent.component").then(com => com.ParentComponent)
  },
    {
    path : "parent2",
    loadComponent : () => import("./parent2/parent2.component").then(com => com.Parent2Component)
  },
   {
    path : "testSignal",
    loadComponent : () => import("./test-signal/test-signal.component").then(com => com.TestSignalComponent)
  },
     {
    path : "login",
    loadComponent : () => import("./login/login.component").then(com => com.LoginComponent)
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