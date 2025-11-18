import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // console.log(route.url);
  // console.log(state.root);
  
  
 if(localStorage.getItem("token")){
      return true;
 }
 else{
    alert("not loged in")
    return false;
 }

};
