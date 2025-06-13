import { Component } from '@angular/core';

@Component({
  selector: 'test-lifecycle',
  template: `
      <h1>Test Lifecycle Hooks</h1>
      <button (click)="updateInput()">Update Input</button>
      <button (click)="toggleComponent()">Toggle Component</button>
      <hr>
      <app-lifecycle-hooks *ngIf="showComponent" [simpleInput]="parentInput"></app-lifecycle-hooks>
    `,
})
export class TestLifecycleComponent {
  parentInput = 'Initial Value';
  showComponent = true;

  updateInput() {
    this.parentInput = 'Updated Value at ' + new Date().getTime();
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
