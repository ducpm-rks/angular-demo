import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <p>Parent Component:</p>
      <p>Message from Child: <span>{{ messageFromChild }}</span></p>
      <button (click)="sendMessageToChild()">Send Message to Child</button>
      <app-child
        [parentMessage]="messageForChild"
        (childEvent)="handleChildEvent($event)">
      </app-child>
    </div>
  `,
})
export class ParentComponent {
  messageForChild = '';
  messageFromChild = '';

  sendMessageToChild() {
    this.messageForChild = 'Parent says: ' + new Date().toLocaleTimeString();
  }

  handleChildEvent(message: string) {
    this.messageFromChild = message;
    console.log('Parent received from Child:', message);
  }
}
