import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
//import * as firebase from 'firebase';

/**
 * Generated class for the Addpro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addpro',
  templateUrl: 'addpro.html',
})
export class Addpro {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addpro');
  }

}
