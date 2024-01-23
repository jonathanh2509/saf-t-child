// saf-t-child.service.proxy.ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SafTChildServiceProxy {
  private apiUrl = 'http://localhost:5000' // For development
  // private apiUrl = 'https://saf-t-child-api.example.com'; // For production

  constructor(private http: HttpClient) {}

  getSampleData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sample-endpoint`)
  }

  // ... other methods ...
}
