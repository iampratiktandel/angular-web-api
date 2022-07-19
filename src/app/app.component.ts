import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-web-api';

  public user: any;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
