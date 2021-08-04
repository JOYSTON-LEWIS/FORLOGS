import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { map } from 'rxjs/operators';
import { CtblogComponent } from '../pages/ctblog/ctblog.component';
import { AngularFirestore,  AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CtblogService {
  formData: CtblogComponent;
  document: any;
  postcomment: { id: any; commentlist: { UserId: string; Comment: any; }[]; }

  constructor(private afs: AngularFirestore, public authservice: AuthService) {
  }

  create_NewPost(record) {
    return this.afs.collection('ctblog').add(record);
  }

  read_Post() {
    return this.afs.collection('ctblog').snapshotChanges();
  }

  update_Post(recordID,record){
    this.afs.doc('ctblog/' + recordID).update(record);
  }

  delete_Post(record_id) {
    this.afs.doc('ctblog/' + record_id).delete();
  }

/*
  // Blog Code New Website
  // https://github.com/AnkitSharma-007/blogging-app-with-Angular-CloudFirestore/blob/master/src/app/services/blog.service.ts
  createPost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));
    return this.afs.collection('blogs').add(postData);
  }

  getAllPosts(): Observable<Post[]> {
    const blogs = this.afs.collection<Post>('blogs', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          c => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
      }));
    return blogs;
  }

  getPostbyId(id: string): Observable<Post> {
    const blogDetails = this.afs.doc<Post>('blogs/' + id).valueChanges();
    return blogDetails;
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));
    return this.afs.doc('blogs/' + postId).update(putData);
  }

  deletePost(postId: string) {
    return this.afs.doc('blogs/' + postId).delete();
  }
  // Comment implemented
  saveComment(comment: Comments) {
    const commentData = JSON.parse(JSON.stringify(comment));
    return this.afs.collection('comments').add(commentData);
  }

getAllCommentsForPost(blogId: string): Observable<Comments[]> {
  const comments = this.afs.collection<Comments>('comments',
    ref => ref.where('blogId', '==', blogId).orderBy('commentDate', 'desc')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          c => ({
            commentId: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
      }));
  return comments;
  }

  deleteAllCommentForBlog(blogId: string) {
    const commentsToDelete = this.afs.collection('comments', ref => ref.where('blogId', '==', blogId)).snapshotChanges();

    commentsToDelete.forEach(
      commentList => {
        commentList.forEach(comment => {
          this.afs.doc('comments/' + comment.payload.doc.id).delete();
        });
      }
    );
  }

  deleteSingleComment(commentId: string) {
    return this.afs.doc('comments/' + commentId).delete();
  }
*/
}
