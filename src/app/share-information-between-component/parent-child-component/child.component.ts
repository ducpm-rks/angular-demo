import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <p>Child Component:</p>
      <p>Received from Parent: <span>{{ parentMessage }}</span></p>
      <button (click)="sendEventToParent()">Send Event to Parent</button>
    </div>
  `,
})
export class ChildComponent implements OnChanges {
  @Input() parentMessage: string;

  @Output() childEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentMessage']) {
      console.log(
        'Child: parentMessage changed to',
        changes['parentMessage'].currentValue
      );
    }
  }

  sendEventToParent() {
    const message = 'Message from Child at ' + new Date().toLocaleTimeString();
    this.childEvent.emit(message);
    console.log('Child emitted to Parent:', message);
  }
}
