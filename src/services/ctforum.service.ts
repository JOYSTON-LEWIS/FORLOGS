import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { CtforumComponent } from '../pages/ctforum/ctforum.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CtforumService {
  formData: CtforumComponent;
  document: any;

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('ctforum').add(record);
  }

  read_Post() {
    return this.afs.collection('ctforum').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('ctforum/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('ctforum/' + record_id).delete();
  }
}
