import {Categorie} from "./categorie";

export class Produit {
    id?: number;
    nom?: string;
    qt?: number;
    disponible?:boolean;
    dateCreation?: Date;
    dateModif?: Date;
    categorie?: Categorie;
}
