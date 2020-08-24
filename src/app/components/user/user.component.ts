import { Component, OnInit, Input } from '@angular/core';
import { GeneralUser } from '../../interface/GeneralUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: GeneralUser;

  constructor( private _router: Router) { }

  ngOnInit() {}

  openUser(){
    //console.log("User", this.user.login);
    this._router.navigate(['tabs/tab2/'+this.user.login]);
  }

}
