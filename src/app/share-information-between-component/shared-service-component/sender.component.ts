import { Component } from '@angular/core';
import { MessageService } from './mesage.service';

@Component({
  selector: 'app-sender',
  template: `
    <div>
      <p>Sender Component:</p>
      <input type="text" [(ngModel)]="messageToSend" placeholder="Enter message to send">
      <button (click)="sendMessage()">Send Message via Service</button>
      <p>Current Service Message (seen by sender): {{ serviceMessage }}</p>
    </div>
  `,
})
export class SenderComponent {
  messageToSend: string = '';
  serviceMessage: string = '';

  constructor(private messageService: MessageService) {
    this.messageService.currentMessage.subscribe((message) => {
      this.serviceMessage = message;
    });
  }

  sendMessage() {
    if (this.messageToSend) {
      this.messageService.changeMessage(this.messageToSend);
      this.messageToSend = '';
    }
  }
}
