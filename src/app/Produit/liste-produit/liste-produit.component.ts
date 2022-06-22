import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../models/produit";

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produit :Produit[ ] = [];
  constructor(private  produitService:ProduitService) { }

  ngOnInit(): void {
    this.loadProduits();
  }
  loadProduits(): void {
    this.produitService.list().subscribe(
        data => {
          this.produit = data;
          // @ts-ignore
            for (let p of  this.produit){
                console.log(p.categorie)
            }

        },
        err => console.log(err)
    );
  }
}
