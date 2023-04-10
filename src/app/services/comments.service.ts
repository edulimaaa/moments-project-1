import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comments } from '../Comments';
import { Response } from '../Response';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Comments): Observable<Response<Comments>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comments>>(url, data);
  }
}
