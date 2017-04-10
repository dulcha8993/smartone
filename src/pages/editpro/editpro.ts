import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sidepro } from "../sidepro/sidepro";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editpro');
  }

  gotoEdit()
  {
    this.navCtrl.push(Sidepro);
  }

}
