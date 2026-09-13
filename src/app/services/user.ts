import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  private currentUser: User | null = null;

  private storageKey = 'this-person-users';
  private currentUserKey = 'this-person-current-user';


  constructor() {

    const savedUsers =
      localStorage.getItem(this.storageKey);

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }


    const savedCurrentUser =
      localStorage.getItem(this.currentUserKey);

    if (savedCurrentUser) {
      this.currentUser =
        JSON.parse(savedCurrentUser);
    }

  }


  registerUser(
    name: string,
    email: string,
    password: string
  ): User {

    const newUser: User = {

      id:
        'U' +
        Math.floor(100000 + Math.random() * 900000),

      name,

      email,

      password,

      createdAt:
        new Date().toISOString()

    };


    this.users.push(newUser);

    this.saveUsers();

    return newUser;

  }


  login(
    email: string,
    password: string
  ): User | null {

    const user =
      this.users.find(
        u =>
          u.email === email &&
          u.password === password
      );


    if (!user) {
      return null;
    }


    this.currentUser = user;

    localStorage.setItem(
      this.currentUserKey,
      JSON.stringify(user)
    );


    return user;

  }


  getCurrentUser(): User | null {

    return this.currentUser;

  }


  logout(): void {

    this.currentUser = null;

    localStorage.removeItem(
      this.currentUserKey
    );

  }


  private saveUsers(): void {

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.users)
    );

  }

}