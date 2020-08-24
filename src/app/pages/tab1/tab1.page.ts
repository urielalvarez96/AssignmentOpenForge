import { Component, OnInit } from '@angular/core';
import { GitUsersService } from '../../services/git-users.service';
import { GeneralUser } from '../../interface/GeneralUser';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  userAux = [];
  since = 0;
  index = 0;
  users: GeneralUser[] = [];
  constructor(private gitUserService:GitUsersService) {

  }

  ngOnInit(){
    this.loadUsers();
  }

  loadData(event){
    //console.log(event);
    this.index++;
    this.loadUsers( event, this.index );
  }

  loadUsers( event?, index? ){
    if(!index){
      index = 0;
    }
    this.gitUserService.getUsers(this.since)
    .subscribe( resp => {
      this.userAux.push(resp);

      for(var i=0;i < this.userAux[index].length; i++){
        this.users.push(this.userAux[index][i])  ;
        this.since = this.userAux[index][i].id;
      }

      if( event ){
        event.target.complete();
      }
      
    });
  }

}
