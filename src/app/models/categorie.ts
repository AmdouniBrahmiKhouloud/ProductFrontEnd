export class Categorie {
    id?: number;
    nom?: string;
    qt?: number;
    dateCreation?: Date;
    dateModif?: Date;
    constructor(id: number, nom: string, qt: number, dateCreation: Date, dateModif: Date) {
        this.id=id;
        this.nom=nom;
        this.qt=qt;
        this.dateCreation=dateCreation;
        this.dateModif=dateModif;
    }
}
