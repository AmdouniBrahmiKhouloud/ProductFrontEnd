import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = environment.url + 'Produit';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  constructor(private httpClient: HttpClient) { }
  public list(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.url + '/retrieve-produit', this.httpOptions);
  }
  public detail(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(this.url + `/retrieve-produit/${id}`, this.httpOptions);
  }
  public create(produit:Produit ,id: number ): Observable<any> {
    return this.httpClient.post<any>(this.url + `/add-produit/${id}`, produit, this.httpOptions);
  }
  public update(idProduit: number, idCategorie: number ,produit:Produit ): Observable<any> {
    return this.httpClient.put<any>(this.url + `/modify-produit/${idProduit}/${idCategorie}`, produit, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/remove-produit/${id}`, this.httpOptions);
  }
}
