import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { LolblogComponent } from '../pages/lolblog/lolblog.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LolblogService {
  formData: LolblogComponent;
  document: any;
  postcomment: { id: any; commentlist: { UserId: string; Comment: any; }[]; }

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('lolblog').add(record);
  }

  read_Post() {
    return this.afs.collection('lolblog').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('lolblog/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('lolblog/' + record_id).delete();
  }
}
