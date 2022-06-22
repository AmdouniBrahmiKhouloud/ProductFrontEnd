import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListeComponent } from './Categorie/liste/liste.component';
import { DetailComponent } from './Categorie/detail/detail.component';
import { CreateComponent } from './Categorie/create/create.component';
import { UpdateComponent } from './Categorie/update/update.component';
import { ListeProduitComponent } from './Produit/liste-produit/liste-produit.component';
import { CreateProduitComponent } from './Produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ListeComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    ListeProduitComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    DetailProduitComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        OAuthModule.forRoot(
            {
                resourceServer: {
                    allowedUrls: ['http://localhost:8089'],
                    sendAccessToken: true
                }
            }
        ),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
