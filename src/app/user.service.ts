import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getHeroes(): User[] {
    return USERS;
  }
}
