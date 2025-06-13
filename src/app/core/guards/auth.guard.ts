import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root', // Modern way to provide the service app-wide
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isUserLoggedIn = false;
    console.log('AuthGuard#canActivate called');

    if (isUserLoggedIn) {
      return true;
    } else {
      // Navigate to the login page if the user is not authenticated
      console.log('Access denied by AuthGuard. Redirecting to home.');
      return this.router.createUrlTree(['/']); // Redirect to the home page
    }
  }
}
