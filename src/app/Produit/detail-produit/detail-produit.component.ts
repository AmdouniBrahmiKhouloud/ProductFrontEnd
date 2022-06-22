import {Component, OnInit} from '@angular/core';
import {Produit} from "../../models/produit";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";

@Component({
    selector: 'app-detail-produit',
    templateUrl: './detail-produit.component.html',
    styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
    produit!: Produit

    constructor(private produitService:ProduitService ,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];
        this.produitService.detail(id).subscribe(
            data => {
                this.produit = data;
            },
            err => console.log(err)
        );
    }
    backToList(): void {
        this.router.navigate(['/produit']);
    }
}
