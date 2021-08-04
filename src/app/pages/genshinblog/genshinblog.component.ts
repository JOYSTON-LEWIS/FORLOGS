import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { GenshinblogService } from 'src/app/services/genshinblog.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-genshinblog',
  templateUrl: './genshinblog.component.html',
  styleUrls: ['./genshinblog.component.css']
})
export class GenshinblogComponent implements OnInit {
  giblog: any;
  blogtitle: string;
  blogcontent: string;
  blogcomment: string;
  uid: string;
  dateNow = Date();
  public show:boolean = false;
  public buttonName:any = 'CREATE NEW BLOG POST HERE';

  constructor(public authservice: AuthService, private router: Router,
              public db: AngularFireDatabase, private service: GenshinblogService, private firest: AngularFirestore) {
              }

   ngOnInit() {
    this.service.read_Post().subscribe(data => {

      this.giblog = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Title: e.payload.doc.data()[' Title'],
          Content: e.payload.doc.data()[' Content'],
          Uid: e.payload.doc.data()[' Uid'],
          Time: e.payload.doc.data()[' Time'],
       };
      })
      console.log(this.giblog);

    });
  }

  CreateRecord() {
    let record = {};
    record[' Title'] = this.blogtitle;
    record[' Content'] = this.blogcontent;
    record[' Uid'] = this.authservice.currentUserId;
    record[' Time'] = this.dateNow;
    this.service.create_NewPost(record).then(resp => {
      this.blogtitle = '';
      this.blogcontent = undefined;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.service.delete_Post(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.Editblogtitle = record.Title;
    record.Editblogcontent = record.Content;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record[' Title'] = recordRow.Editblogtitle;
    record[' Content'] = recordRow.Editblogcontent;
    this.service.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "CREATE NEW BLOG POST HERE";
  }
}
