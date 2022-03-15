import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';
import { UserData } from 'src/app/user';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

public userDetail:UserData[]=[] ;
public names:string[] = ["Gech","brook", "maru"];
public ages:number[] = [30,30, 30];

userStatus:'active'|'inactive'='active'

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.userStatus="active";
    this.appService.getUseds().subscribe( (data:UserData[]) => {      
    this.userDetail = data});
  }

}
