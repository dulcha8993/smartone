import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mainpro } from "../mainpro/mainpro";
import { Contact } from "../contact/contact";
import { Aboutus } from "../aboutus/aboutus";
import { Forum } from "../forum/forum";
//import * as firebase from 'firebase';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
//homTab=Mainpro;
  contactTab=Contact;
  aboutTab=Aboutus;
  forTab=Forum;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
