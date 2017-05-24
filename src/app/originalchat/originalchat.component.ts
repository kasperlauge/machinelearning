import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-originalchat',
  templateUrl: './originalchat.component.html',
  styleUrls: ['./originalchat.component.css']
})
export class OriginalchatComponent implements OnInit {

  rawText: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.rawText = db.list('/raw');
   }

  ngOnInit() {
  }

}
