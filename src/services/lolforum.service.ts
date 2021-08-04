import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { LolforumComponent } from '../pages/lolforum/lolforum.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LolforumService {
  formData: LolforumComponent;
  document: any;

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('lolforum').add(record);
  }

  read_Post() {
    return this.afs.collection('lolforum').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('lolforum/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('lolforum/' + record_id).delete();
  }
}
