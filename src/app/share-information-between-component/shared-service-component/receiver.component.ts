import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MessageService } from './mesage.service';

@Component({
  selector: 'app-receiver',
  template: `
    <div>
      <p>Receiver Component:</p>
      <p>Received Message from Service: <span>{{ receivedMessage }}</span></p>
    </div>
  `,
})
export class ReceiverComponent implements OnInit, OnDestroy {
  receivedMessage: string = '';
  private messageSubscription: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageSubscription = this.messageService.currentMessage.subscribe(
      (message) => {
        this.receivedMessage = message;
        console.log('Receiver: Received from service:', message);
      }
    );
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
