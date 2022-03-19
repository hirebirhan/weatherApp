import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  currentMessageValue: string='';
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
   this.messageService.getCurrentMessage().subscribe(result=>{
     this.currentMessageValue= result
   })
  }

  ChangeMessageValue(){
    this.messageService.SetMessageValue("welcome to subscription class")
  }

}
