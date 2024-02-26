// saf-t-child.service.proxy.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import * as Carvana from '../_models/carvana';

@Injectable({
  providedIn: 'root',
})
export class CarvanaProxyService {
  private apiUrl =
    'https://2f25yv6gm3jrw6xtuq7wxnyavi0onkfp.lambda-url.us-east-2.on.aws/'; // For development

  constructor(private http: HttpClient) {}

  getSuggestions(searchTerm: string): Observable<Carvana.Results> {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    return this.http.get<Carvana.Results>(
      `${this.apiUrl}suggestions?query=${encodedSearchTerm}`,
    );
  }
}
