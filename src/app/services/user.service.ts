import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Olivier',
        lastName: 'Charpentier',
        age: 38,
        email: 'olivier.charpentier@icloud.com',
        isActive: true,
        registered: new Date('02/11/2018 08:40:00'),
        hide: true
      },
      {
        firstName: 'Robert',
        lastName: 'Gireaudeau',
        age: 38,
        email: 'olivier.charpentier@icloud.com',
        isActive: false,
        registered: new Date('10/06/2018 08:10:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Morlietre',
        age: 38,
        email: 'olivier.charpentier@icloud.com',
        isActive: true,
        registered: new Date('03/11/2014 08:00:00'),
        hide: true
      }
    ];
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
     });
     return this.data;
   }

   getUsers(): Observable<User[]> {
    return of(this.users);
   }

   addUser(user: User) {
    this.users.unshift(user);
   }
}
