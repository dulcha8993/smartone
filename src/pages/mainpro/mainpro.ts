import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contact } from "../contact/contact";
import { Aboutus } from "../aboutus/aboutus";
import { Forum } from "../forum/forum";
import { Tabs } from "ionic-angular";
import {AngularFire , FirebaseListObservable} from 'angularfire2';

//import * as firebase from 'firebase';

/**
 * Generated class for the Mainpro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mainpro',
  templateUrl: 'mainpro.html',
})


    
export class Mainpro {
    doctor_details: FirebaseListObservable<any>;
  
 /*contactTab=Contact;
  aboutTab=Aboutus;
  forTab=Forum;
*/

  constructor(public navCtrl: NavController, public navParams: NavParams, angiFire:AngularFire) {
    this.doctor_details=angiFire.database.list('/doctor_details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mainpro');
  }


  
 ionViewLoaded(){
    
   
    };
}
