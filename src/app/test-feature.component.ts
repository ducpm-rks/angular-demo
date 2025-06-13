import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'test-feature',
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/protected">Try Protected Route</a> |
      <a routerLink="/profile">Load Profile with Resolver</a>
    </nav>
    
    <hr>
    <button (click)="makeHttpRequest()">Test HTTP Interceptor</button>
    `,
})
export class TestFeatureComponent {
  constructor(private http: HttpClient) {} // Inject HttpClient

  makeHttpRequest() {
    console.log('Making HTTP request...');
    // This request will be intercepted
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        console.log('HTTP Response:', response);
      });
  }
}
