import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
currentMessage:any;
  constructor(private notificationService:NotificationService) { }

  ngOnInit(): void {
this.notificationService.notificationSubject.subscribe(d =>{
  this.currentMessage = d;
})
  }
sendMessage(data:any){
  this.notificationService.sendNotification(data.value);
}
}
