import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

// tslint:disable-next-line: one-variable-per-declaration
const config = {
  apiKey : 'AIzaSyBo6YeO-GoJ0KkThQKzdO-Fq3VpOGlasNk',
  authDomain: 'forlog-cfcf3.firebaseapp.com',
  databaseURL : 'https://forlog-cfcf3.firebaseio.com',
  projectId: 'forlog-cfcf3',
  storageBucket: 'forlog-cfcf3.appspot.com',
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forlog';

  constructor() {
    firebase.initializeApp(config);
    // firebase.firestore();
  }

}
