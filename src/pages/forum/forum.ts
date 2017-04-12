import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";
//import * as firebase from 'firebase';

/**
 * Generated class for the Forum page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class Forum {

  quaryText: string;
  ques: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams ,angiFire:AngularFire) {

    this.ques=angiFire.database.list('/ques');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forum');
  }

}
