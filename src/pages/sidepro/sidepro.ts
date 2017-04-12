import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { AngularFire, FirebaseListObservable ,AngularFireDatabase} from "angularfire2";
//import {Camera} from 'ionic-native';
import {Photo} from '../photo'

/**
 * Generated class for the Sidepro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sidepro',
  templateUrl: 'sidepro.html',
})
export class Sidepro {
    doctor_details: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
               public angiFire:AngularFire, public angidb:AngularFireDatabase ) {
    this.doctor_details=angiFire.database.list('/doctor_details');

    
  }

photos: Photo[] = [new Photo("http://placehold.it/350x150")];

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sidepro');
  }

  updateData(){

    HTMLDataListElement=>{this.doctor_details.push
                                                   ('/doctor_details')}

  }

 /*takePhoto()
  {
    Camera.getPicture({
      destinationType: Camera.destinationType.DATA_URL,
      targetHeight:500,
      targetWidth:500
    })
  }
*/
}
