import { Author } from './core/author';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from './core/tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  API_URL = 'https://bnppf1-bookmarks.herokuapp.com/tag/';

  constructor(private http: HttpClient) {
  }
  public getById(id: string): Observable<Tag> {
    return this.http.get<Tag>(this.API_URL + id);
  }
  public getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.API_URL);
  }
  public update(tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.API_URL + tag.id, tag);
  }
  public deleteById(id: string): Observable<Tag> {
     return this.http.delete<Tag>(this.API_URL + id);
  }
  public create(tag: Tag): Observable<Tag> {
    const authoringTag = {...tag, author: '5b426e7cc75a0fae804b9c12'};
    return this.http.post<Tag>(this.API_URL , authoringTag);
  }
}
