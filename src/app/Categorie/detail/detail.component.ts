import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../models/categorie";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  categorie!: Categorie;
  constructor(private  categorieService:CategorieService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.categorieService.detail(id).subscribe(
        data => {
          this.categorie = data;
          console.log(this.categorie)
        },
        err => console.log(err)
    );
  }
  backToList(): void {
    this.router.navigate(['/categorie']);
  }

}
