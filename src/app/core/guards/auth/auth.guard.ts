import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';
import {UserService} from '../../services/user/user.service';
import {Inject} from '@angular/core';

// export class authGuard implements CanActivate {
//
//   constructor(private userService: UserService, private router: Router) { }
//   canActivate() {
//     if(this.userService.isAuthenticated()) {
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;
//   }
//
// };

export const authGuard: CanActivateFn = ():boolean => {
  const user = Inject(UserService)
  const router = Inject(Router)
      if(user && user.isAuthenticated()) {
      return true;
    }
    router.navigate(['/login']);
    return false;
}
