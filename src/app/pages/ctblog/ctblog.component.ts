import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { CtblogService } from 'src/app/services/ctblog.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ctblog',
  templateUrl: './ctblog.component.html',
  styleUrls: ['./ctblog.component.css']
})

export class CtblogComponent implements OnInit {
  ctblog: any;
  blogtitle: string;
  blogcontent: string;
  blogcomment: string;
  uid: string;
  dateNow = Date();
  public show:boolean = false;
  public buttonName:any = 'CREATE NEW BLOG POST HERE';

  constructor(public authservice: AuthService, private router: Router,
              public db: AngularFireDatabase, private service: CtblogService, private firest: AngularFirestore) {
              }

   ngOnInit() {
    this.service.read_Post().subscribe(data => {

      this.ctblog = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Title: e.payload.doc.data()[' Title'],
          Content: e.payload.doc.data()[' Content'],
          Uid: e.payload.doc.data()[' Uid'],
          Time: e.payload.doc.data()[' Time'],
       };
      })
      console.log(this.ctblog);

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
  /*
  addToCommList(ctblog) {
    let userRef: AngularFirestoreDocument<any> = this.firest.doc(`ctblog/${ctblog.id}`);
    ctblog.commList.push({
        userid: this.authservice.currentUserId,
        Comment: this.comm
      });
    let data: List = {
      userid: this.authservice.currentUserId,
      comm: this.comm
        }
    return userRef.update(data);
  }

    /*
  addtocommlist() {
    let record = {};
    record[' CommentSet'] = this.CommList;
    this.service.create_NewComment(record).then(resp => {
      this.CommList = [];
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }


// trial
async addToCommentSet(postcomment) {
  const userRef: AngularFirestoreDocument<any> = this.firest.doc(`ctblog/${postcomment.id}`);
  postcomment.commmentlist.push({
      UserId: this.authservice.currentUserId,
      Comment: this.document.comment
    });
  const unionRes: any = await userRef.update({
      commentlist: firebase.firestore.FieldValue.arrayUnion('CommentSet')
    });
  return userRef.update(unionRes);
}

  // NewWEBSITE
  getBlogPosts() {
    this.service.getAllPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.blogPost = result;
      });
  }

  delete(postId: string) {
    if (confirm('Are you sure')) {
      this.service.deletePost(postId).then(
        () => {
          this.service.deleteAllCommentForBlog(postId);
        }
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  CreateComment() {
    let record = {};
    record[' Commentlist'] = this.commentlist;
    record[' Uid'] = this.authservice.currentUserId;
    this.service.create_NewComment().then(resp => {
      this.commentlist = [];
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

    CreateComment() {
    let comment = {};
    comment[' Comment'] = this.comments;
    comment[' Uid'] = this.authservice.currentUserId;
    this.service.create_NewComment(comment,record_id).then(resp => {
      this.comments = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  Create_Comment(){
    this.service.read_Post().subscribe(data => {

      this.ctblog = data.map(e => {
        return {
          id: e.payload.doc.id,
  }

  postBoards(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  ref= firebase.firestore().collection('posts');

  onFormSubmit(form:NgForm) {
    this.postBoards(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/boards-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

variables :-
  useridValue = '';
  userid: Observable<any[]>;
  titleValue = '';
  title: Observable<any[]>;
  descriptionValue = '';
  description: Observable<any[]>;

  postValue = '' ;
  post: Observable<any[]>;

  blogtitle: any;
  blogcontent: any;
  blogcomment: string;

  constructor :-
    this.userid = db.list('ctblogcontent/userid').valueChanges();
    this.title = db.list('ctblogcontent/title').valueChanges();
    this.description = db.list('ctblogcontent/description').valueChanges();
    this.post = db.list('ctblogcontent/post').valueChanges();
*/

