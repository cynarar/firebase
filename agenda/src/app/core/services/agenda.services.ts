import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule } from "@angular/fire/firestore";

export class AgendaService {
    constructor(private firestore: Firestore) { }

    create(data: any) {
        return new Promise<any>((resolve, reject) =>{
            // this.firestore.
            //     .collection("coffeeOrders")
            //     .add(data)
            //     .then(res => {}, err => reject(err));
        });
    }
}