import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interface/User';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { GitUsersService } from '../../services/git-users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specificUser',
  templateUrl: './specific-user.component.html',
  styleUrls: ['./specific-user.component.scss'],
})
export class SpecificUserComponent implements OnInit {
  @Input() user: User;
  login:string;
  constructor( private iab: InAppBrowser, private userService:GitUsersService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.login = this.route.snapshot.params.user;
  }

  openWeb(){
    const browser = this.iab.create(this.user.blog, '_system');
  }

  search(event){
    const val = event.detail.value;
    
    if(val == ""){
      this.user = null;
    }
    else{
      this.userService.searchUser( val )
      .subscribe( resp => {
        this.user = resp;
        this.login = this.user.login;
      }, (error) => {
        console.log("User not found");
      });
    }

    
  }

}
