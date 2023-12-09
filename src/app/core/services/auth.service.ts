// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/user.model';
import { LoginInput } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'http://localhost:3005/user';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<TokenResponse> {
    const body: LoginInput = { username, password };
    return this.http.post<TokenResponse>(`${this.apiUrl}/login`, body, { withCredentials: true });
  }

  refreshToken(): Observable<TokenResponse> {
    // Adjust the endpoint based on your API
    return this.http.post<TokenResponse>(`${this.apiUrl}/refresh-token`, {},{ withCredentials: true });
  }
}


