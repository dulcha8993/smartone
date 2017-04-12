import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sidepro } from "../sidepro/sidepro";
import { FirebaseListObservable, AngularFire } from "angularfire2";
//import * as firebase from 'firebase';

/**
 * Generated class for the Editpro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editpro',
  templateUrl: 'editpro.html',
})
export class Editpro {
   doctor_details: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,angiFire:AngularFire) {
    this.doctor_details=angiFire.database.list('/doctor_details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editpro');
  }

  gotoEdit()
  {
    this.navCtrl.push(Sidepro);
  }

}
