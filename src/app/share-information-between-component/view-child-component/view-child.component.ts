import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <div>
      <p>ViewChild Component:</p>
      <p>Internal Message: <span>{{ internalMessage }}</span></p>
    </div>
  `,
})
export class ViewChildComponent {
  internalMessage: string = '';

  updateMessage(newMessage: string) {
    this.internalMessage = newMessage;
    console.log('ViewChild: Message updated by parent to:', newMessage);
  }

  getInternalMessage(): string {
    return this.internalMessage;
  }
}
