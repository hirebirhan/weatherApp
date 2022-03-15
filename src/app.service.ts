import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
private userUrl: string ='/assets/data/userDetails.json';
 
  constructor(private https: HttpClient) { }


   getUseds(): Observable<UserData[]> {
    return this.https.get<UserData[]>(this.userUrl)
   }

}
