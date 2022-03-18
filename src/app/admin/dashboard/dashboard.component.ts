import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UsersService } from '../users.service';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */

  public users: any[] = [];
  allUser: User[] = [];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }

      ];
    })
  );

  ngOnInit(): void {
    this.fetchUsers();
    this.getAllUsers();
  }

  constructor(private breakpointObserver:
    BreakpointObserver, private userservice: UsersService) { }

  fetchUsers() {
    this.userservice.getUsers().subscribe((result: any) => {
      this.users = result;
    })
  }

  getAllUsers() {
    this.userservice.getUsersAsnc().subscribe((users: User[]) => {
      this.allUser = users;
    });
  }



  deleteUser(user: User) {
    // 1 === '1'
    this.userservice.deleteUser(user).subscribe(() => {
      this.allUser = this.allUser.filter((item) => user.id !== item.id);
    });
  }

  fetchUser(id: number) {
    this.userservice.getUser(id).subscribe(user => {
      console.log("user", user)
    })
  }
}
