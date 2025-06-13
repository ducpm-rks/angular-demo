import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ViewChildComponent } from './view-child.component';

@Component({
  selector: 'app-view-parent',
  template: `
    <div>
      <p>Parent Component (using ViewChild):</p>
      <button (click)="interactWithChild()">Call Child Method</button>
      <p>Child Status: <span>{{ childStatus }}</span></p>
      <app-view-child></app-view-child>
      <hr class="my-4">
      <p>Accessing a DOM element using <span>@ViewChild</span> with ElementRef:</p>
      <input type="text" #nameInput placeholder="Type something here">
      <button (click)="logInputValue()">Log Input Value</button>
    </div>
  `,
})
export class ViewParentComponent implements OnInit {
  @ViewChild(ViewChildComponent) viewChildComponent: ViewChildComponent;

  @ViewChild('nameInput') inputElement: ElementRef;

  childStatus: string = '';

  ngOnInit() {
    if (this.viewChildComponent) {
      console.log(
        'ViewParent: ViewChildComponent available in ngAfterViewInit!'
      );
      this.childStatus = `Child says: "${this.viewChildComponent.getInternalMessage()}"`;
    } else {
      console.warn('ViewParent: ViewChildComponent not found!');
    }
  }

  interactWithChild() {
    if (this.viewChildComponent) {
      this.viewChildComponent.updateMessage(
        'Message from Parent via ViewChild!'
      );
      this.childStatus = `Child updated: "${this.viewChildComponent.getInternalMessage()}"`;
      console.log('ViewParent: Called method on ViewChildComponent.');
    }
  }

  logInputValue() {
    if (this.inputElement) {
      const value = this.inputElement.nativeElement.value;
      alert(`Input value from ElementRef: "${value}"`);
      console.log('ViewParent: Input value accessed via ElementRef:', value);
    }
  }
}
