import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Categorie} from "../../models/categorie";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categorie!: CategorieService;
  constructor(private  categorieService:CategorieService,private router: Router) {

  }
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      'nom': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'qt': new FormControl('',Validators.required ),
    })
  }
  onCreate(f: FormGroup):void{
    if (f.valid){
      // @ts-ignore
      this.categorie = new Categorie(null,f.controls['nom'].value,f.controls['qt'].value,null,null);
     // @ts-ignore
      this.categorieService.create(this.categorie).subscribe(
          data => {
            console.log(data);
            this.backToList();
          },
          err => console.log(err)
      );
    }
}
  backToList(): void {
    this.router.navigate(['/categorie']);
  }
}
