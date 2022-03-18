import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User} from './../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly usersUrl='https://jsonplaceholder.typicode.com/users';
  private apiUrl : string  ="http://localhost:5001/users";

  constructor(private httpClient: HttpClient) { }

  getUsers(){
   return this.httpClient.get(this.usersUrl);
  }

  getUsersAsnc() : Observable<User[]>{
    return  this.httpClient.get<User[]>(this.apiUrl);
  }

  deleteUser(user : User){
    const url = `${this.apiUrl}/${user.id}`;
    return this.httpClient.delete(url);
  }

  getUser(id:number){
    console.log("received an id ", id)
    return this.httpClient.get(this.usersUrl+'/'+id);
  }
}