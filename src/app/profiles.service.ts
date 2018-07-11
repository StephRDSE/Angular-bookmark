import { Author } from './core/author';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  API_URL = 'https://bnppf1-bookmarks.herokuapp.com/author/';

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Author> {
    return this.http.get<Author>(this.API_URL + id);
  }
  public create(author: Author): Observable<Author> {
    return this.http.post<Author>(this.API_URL , author);
  }
}
