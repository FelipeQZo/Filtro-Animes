import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http:HttpClient) {}

  getAnimes(configure:{ limit: number, q: string, fields: string }): Observable<any>{
    return this.http.get('http://localhost:3000/anime',{
      params: {
        q:configure.q,
        limit: configure.limit,
        fields: configure.fields
      }
    })
  }
}
