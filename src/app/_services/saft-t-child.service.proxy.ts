// saf-t-child.service.proxy.ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'

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

  getLogin(): Observable<any> {
    const shouldReturnOk = Math.random() < 0.5 // 50% chance for either

    if (shouldReturnOk) {
      // Simulate a successful response
      return of({ status: 200, message: 'OK' })
    } else {
      // Simulate a 404 error response
      // Note: throwError is deprecated in newer RxJS versions, you might need to adjust based on your version
      return throwError(() => new Error('404 Not Found'))
    }
  }

  // ... other methods ...
}
