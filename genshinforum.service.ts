import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenshinforumComponent } from '../pages/genshinforum/genshinforum.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GenshinforumService {
  formData: GenshinforumComponent;
  document: any;

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('giforum').add(record);
  }

  read_Post() {
    return this.afs.collection('giforum').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('giforum/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('giforum/' + record_id).delete();
  }
}

