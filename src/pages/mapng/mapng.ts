import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from 'ionic-native/geolocation'

/**
 * Generated class for the Mapng page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-mapng',
  templateUrl: 'mapng.html',
})
export class Mapng {

  location:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mapng');
  }

onlo(){
   Geolocation.getCurrentPosition().then(
     (location) => {
       console.log("Success");
       this.location=location;
     }
   )
   .catch(
     (error) => {console.log("error occur")}
   )
}
 

}
