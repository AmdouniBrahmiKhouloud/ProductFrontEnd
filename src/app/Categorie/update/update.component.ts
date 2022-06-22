import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../models/categorie";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categorie!: Categorie;
  myForm!: FormGroup;
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

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.categorieService.update(id, this.categorie).subscribe(
        data => {
          console.log(data);
          this.backToList();
        },
        err => console.log(err)
    );
  }
}
