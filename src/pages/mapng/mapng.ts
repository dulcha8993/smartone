import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  lat: number;
  lng: Number;

    //let location = new GoogleMapsLatLng('65.9667', '-18.5333');



  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {

   


  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mapng');
  }
onlo(){
   this.geolocation.getCurrentPosition().then(
     (location) => {
       console.log("Success");
       this.location="('65.9667', '-18.5333')";
     }
   )
   .catch(
     (error) => {console.log("error occur")}
   )

   let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
}

 

}
