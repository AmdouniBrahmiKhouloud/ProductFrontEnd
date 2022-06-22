import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Categorie} from "../models/categorie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = environment.url + 'Categorie';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(this.url + '/retrieve-categorie', this.httpOptions);
  }

  public detail(id: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(this.url + `/retrieve-categorie/${id}`, this.httpOptions);
  }
  public create(categorie: Categorie): Observable<any> {
    return this.httpClient.post<any>(this.url + '/add-categorie', categorie, this.httpOptions);
  }

  public update(id: number, categorie: Categorie): Observable<any> {
    return this.httpClient.put<any>(this.url + `/modify-categorie/${id}`, categorie, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/remove-categorie/${id}`, this.httpOptions);
  }
}
