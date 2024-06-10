import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: any): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === user.email)) {
      return false; // User already exists
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getProfile(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  updateProfile(updatedProfile: any): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let userIndex = users.findIndex((u: any) => u.email === updatedProfile.oldEmail);
    
    if (userIndex !== -1) {
      users[userIndex] = updatedProfile;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUser', JSON.stringify(updatedProfile));
      return true;
    }
    return false;
  }
}
