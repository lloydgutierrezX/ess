import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = signal<string | null>(localStorage.getItem('token'));
  readonly isLoggedIn = computed(() => this._token() !== null);

  get token() {
    return this._token();
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this._token.set(token);
  }

  logout() {
    localStorage.removeItem('token');
    this._token.set(null);
  }
}
