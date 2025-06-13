import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from './core/resolvers/user-data.resolver';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="userData">
      <h1>User Profile</h1>
      <p><strong>ID:</strong> {{ userData.id }}</p>
      <p><strong>Name:</strong> {{ userData.name }}</p>
      <p><strong>Email:</strong> {{ userData.email }}</p>
    </div>
  `,
})
export class UserProfileComponent implements OnInit {
  userData: UserData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the resolved data from the 'user' property we defined in the route config
    this.userData = this.route.snapshot.data['user'];

    console.log('UserProfileComponent received resolved data:', this.userData);
  }
}
