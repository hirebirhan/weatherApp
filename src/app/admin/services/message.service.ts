import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

   message = new BehaviorSubject<string>("This is default value");
  constructor() {
  }

   getCurrentMessage() {
    return this.message.asObservable();
  }

   SetMessageValue(value: string) {
    this.message.next(value)
  }
}
