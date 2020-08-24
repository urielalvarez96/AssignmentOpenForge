import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralUser } from '../interface/GeneralUser';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  baseUrl = "https://api.github.com/users"  

  constructor( private http: HttpClient) { }

  getUsers(since:number) {

    //this.since += 40;
    return this.http.get<GeneralUser>(`${this.baseUrl}?since=${since}`);
  }

  getSpecificUser(login:string){
    return this.http.get<User>(`${this.baseUrl}/${login}`);
  }

  searchUser(login:string){
    return this.http.get<User>(`${this.baseUrl}/${login}`);
  }
}
