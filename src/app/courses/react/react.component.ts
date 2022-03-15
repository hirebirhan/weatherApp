import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';
import { UserData } from 'src/app/user';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

public userDetail:any  ;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUseds().subscribe( data => {
      console.log(data);
      
      this.userDetail = data});
    
  }

}
