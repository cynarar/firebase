import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, from } from "rxjs";
import { iEscola } from "../models/escola.model";

@Injectable({
    providedIn: 'root',
  })
export class EscolaService {
    private escolasCollection: AngularFirestoreCollection<iEscola>;
    escolas: Observable<iEscola[]>;

    constructor(private afs: AngularFirestore) { 
        this.escolasCollection = afs.collection<iEscola>('escolas');
        this.escolas = this.escolasCollection.valueChanges({ idField: 'id' });
    }

    create(escola: iEscola): Observable<DocumentReference> {
        console.log('chamou o serviço');
        return from(this.escolasCollection.add(escola));
    }

    update(escola: iEscola): Observable<void> {
        return from(
            this.afs.doc<iEscola>(`escolas/${escola.id}`).update({
          }),
        );
    }
}