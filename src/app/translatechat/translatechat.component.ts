import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-translatechat',
  templateUrl: './translatechat.component.html',
  styleUrls: ['./translatechat.component.css']
})
export class TranslatechatComponent implements OnInit {

  transformedText: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.transformedText = db.list('/transformed');
   }

  ngOnInit() {

  }

}
