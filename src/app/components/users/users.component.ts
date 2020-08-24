import { Component, OnInit, Input } from '@angular/core';
import { GeneralUser } from '../../interface/GeneralUser';

@Component({
  selector: 'app-GeneralUser',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: GeneralUser[] = [];


  constructor() { }

  ngOnInit() {
  }

}
