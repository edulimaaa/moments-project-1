import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { Response } from '../Response';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MomentsService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  // Exibir todos os moments na home
  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Response<Moment>>(url);
  }

  deleteMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url);
  }

  // Criar um novo moment
  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Editar um moment
  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
