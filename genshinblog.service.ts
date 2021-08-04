import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenshinblogComponent } from '../pages/genshinblog/genshinblog.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GenshinblogService {
  formData: GenshinblogComponent;
  document: any;
  postcomment: { id: any; commentlist: { UserId: string; Comment: any; }[]; }

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('giblog').add(record);
  }

  read_Post() {
    return this.afs.collection('giblog').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('giblog/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('giblog/' + record_id).delete();
  }
}
