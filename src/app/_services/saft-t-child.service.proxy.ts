// saf-t-child.service.proxy.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SafTChildServiceProxy {
  private apiUrl =
    'https://pngx6thynntc4hlwyrahc26e5u0cevyg.lambda-url.us-east-2.on.aws'; // For development
  // private apiUrl = 'https://saf-t-child-api.example.com'; // For production

  constructor(private http: HttpClient) {}

  getSampleData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sample-endpoint`);
  }

  getDeviceInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getDeviceInfo`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
