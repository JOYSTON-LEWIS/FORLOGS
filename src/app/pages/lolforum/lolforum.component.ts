import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LolforumService } from 'src/app/services/lolforum.service';

@Component({
  selector: 'app-lolforum',
  templateUrl: './lolforum.component.html',
  styleUrls: ['./lolforum.component.css']
})
export class LolforumComponent implements OnInit {
  lolforum: any;
  forumtitle: string;
  forumcontent: string;
  uid: string;
  dateNow = Date();
  public show:boolean = false;
  public buttonName:any = 'CREATE NEW THREAD HERE';
  threadid: { id: string; }[];

  constructor(public authservice: AuthService, private router: Router,
              public db: AngularFireDatabase, private service: LolforumService, private firest: AngularFirestore) {
              }

   ngOnInit() {
    this.service.read_Post().subscribe(data => {

      this.lolforum = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Title: e.payload.doc.data()[' Title'],
          Content: e.payload.doc.data()[' Content'],
          Uid: e.payload.doc.data()[' Uid'],
          Time: e.payload.doc.data()[' Time'],
       };
      })
      console.log(this.lolforum);

    });
  }

  CreateRecord() {
    let record = {};
    record[' Title'] = this.forumtitle;
    record[' Content'] = this.forumcontent;
    record[' Uid'] = this.authservice.currentUserId;
    record[' Time'] = this.dateNow;
    this.service.create_NewPost(record).then(resp => {
      this.forumtitle = '';
      this.forumcontent = undefined;
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
    record.Editforumtitle = record.Title;
    record.Editforumcontent = record.Content;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record[' Title'] = recordRow.Editforumtitle;
    record[' Content'] = recordRow.Editforumcontent;
    this.service.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "CREATE NEW THREAD HERE";
  }
}
