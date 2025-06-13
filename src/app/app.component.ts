import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
    <a routerLink="/lifecycle">Test Lifecycle Hooks</a>
    <br/>
    <a routerLink="/feature">Test interceptor, guard, resolver</a>
    <br/>
    <a routerLink="/pass-data">Test pass data between component</a>
    <br/>
    <a routerLink="/test-redux">Test redux</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
