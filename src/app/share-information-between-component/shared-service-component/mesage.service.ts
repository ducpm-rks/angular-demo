import { BehaviorSubject, Observable } from 'rxjs';

export class MessageService {
  private messageSource = new BehaviorSubject<string>(
    'Initial message from service'
  );

  currentMessage: Observable<string> = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log('Service: Message changed to:', message);
  }
}
