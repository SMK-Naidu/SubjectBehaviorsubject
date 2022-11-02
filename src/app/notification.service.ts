import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

public notificationSubject = new BehaviorSubject<string>('Greeting from Smknaidu');
  constructor() { }
sendNotification(data: string){
  this.notificationSubject.next(data);
}
}
