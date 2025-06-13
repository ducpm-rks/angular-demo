import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Define a simple interface for our user data
export interface UserData {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserDataResolver implements Resolve<UserData> {
  constructor() {}

  resolve(): Observable<UserData> {
    console.log('UserDataResolver#resolve called');

    // In a real app, you would make an HTTP call here:
    // return this.http.get<UserData>('/api/users/1');

    // For this example, we'll return mock data with a 1-second delay to simulate an API call.
    const mockUserData: UserData = {
      id: 1,
      name: 'Test Resolver',
      email: 'Test Resolver',
    };

    return of(mockUserData).pipe(delay(1000));
  }
}
