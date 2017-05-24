import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  textInput: string;
  chatText: FirebaseListObservable<any[]>;
  transformedText: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.chatText = db.list('/raw');
    this.transformedText = db.list('/transformed');
  }

  submitText() {
    this.chatText.push(this.textInput);
    this.textInput = null;
  }

  clearChat() {
    this.transformedText.$ref.ref.remove();
    this.chatText.$ref.ref.remove();
  }
  ngOnInit() {
  }

}
