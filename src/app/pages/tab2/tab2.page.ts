import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitUsersService } from 'src/app/services/git-users.service';
import { User } from '../../interface/User';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  login : string;
  user: User;
  constructor(private gitUserService:GitUsersService, private route: ActivatedRoute) {
    this.login = this.route.snapshot.params.user;
    if(this.login == undefined){
      this.login = "";
    }
  }

  ngOnInit(): void {
    this.gitUserService.getSpecificUser(this.login).subscribe(user => {
      this.user = user;
    });
  }

}
