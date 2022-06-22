import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {Categorie} from "../../models/categorie";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  categories :Categorie[ ] = [];
  isAdmin?: boolean;
  constructor(private  categorieService:CategorieService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.isAdmin = this.loginService.getIsAdmin();
  }
  loadCategories(): void {
    this.categorieService.list().subscribe(
        data => {
          this.categories = data;
        },
        err => console.log(err)
    );
  }

}
