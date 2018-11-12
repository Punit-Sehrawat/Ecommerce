import { Component, OnInit } from '@angular/core';
import { appService } from './app.service';
import { User } from './user.model';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent implements OnInit {
  title = 'testing';

   users: User[];

  constructor(private appService: appService) {

  }

  ngOnInit() {
    this.appService.getUsers()
      .subscribe( data => {
        this.users = data;
        //console.log(this.users);
      });
  };
}
