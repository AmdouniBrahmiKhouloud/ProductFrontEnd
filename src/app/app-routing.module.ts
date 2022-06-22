import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListeComponent} from "./Categorie/liste/liste.component";
import {DetailComponent} from "./Categorie/detail/detail.component";
import {UpdateComponent} from "./Categorie/update/update.component";
import {CreateComponent} from "./Categorie/create/create.component";
import {DetailProduitComponent} from "./Produit/detail-produit/detail-produit.component";
import {ListeProduitComponent} from "./Produit/liste-produit/liste-produit.component";
import {CreateProduitComponent} from "./Produit/create-produit/create-produit.component";
import {UpdateProduitComponent} from "./Produit/update-produit/update-produit.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categorie/detail/:id', component: DetailComponent},
    {path: 'categorie/update/:id', component: UpdateComponent},
    {path:'categorie/create',component:CreateComponent},
    {path: 'categorie', component: ListeComponent},
    {path: 'produit/detail/:id', component: DetailProduitComponent},
    {path: 'produit/update/:id', component: UpdateProduitComponent},
    {path:'produit/create',component:CreateProduitComponent},
    {path: 'produit', component: ListeProduitComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
