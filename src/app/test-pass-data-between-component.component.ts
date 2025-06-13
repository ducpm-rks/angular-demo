import { Component } from '@angular/core';

@Component({
  selector: 'test-pass-data',
  template: `
    <div class="container">
      <h1>Angular Component Communication Examples</h1>

      <!-- Example 1: Parent ↔ Child Communication (@Input() / @Output()) -->
      <h2>1. Parent ↔ Child Communication (using <span>@Input()</span> / <span>@Output()</span>)</h2>
      <div>
        <h3>Parent Component</h3>
        <app-parent></app-parent>
      </div>

      <!-- Example 2: Unrelated Components Communication (using Shared Service) -->
      <h2>2. Unrelated Components Communication (using <span>Shared Service with Subject</span>)</h2>
      <div>
        <h3>Sender Component</h3>
        <app-sender></app-sender>
        <h3>Receiver Component</h3>
        <app-receiver></app-receiver>
      </div>

      <!-- Example 3: Parent to Child Direct Access (using ViewChild) -->
      <h2>3. Parent to Child Direct Access (using <span>@ViewChild</span>)</h2>
      <div>
        <h3>ViewParent Component</h3>
        <app-view-parent></app-view-parent>
      </div>
    </div>
  `,
})
export class PassDataComponent {}
