import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Mainpro } from "../pages/mainpro/mainpro";
import { Editpro } from "../pages/editpro/editpro";
import { Sidepro } from "../pages/sidepro/sidepro";
import { Aboutus } from "../pages/aboutus/aboutus";
import { Contact } from "../pages/contact/contact";
import { Forum } from "../pages/forum/forum";
import { Tabs } from "../pages/tabs/tabs";
//import { AngularFireModule } from "angularfire2";

//import * as firebase from 'firebase';
import { AngularFireModule } from "angularfire2";
//import {AngularFireModule} from 'angularfire2'


/*const config = {
    apiKey: "AIzaSyAYBgeZWrHOa_wjTaz-ywYU-BZnV1psq6w",
    authDomain: "smart-chanel-db.firebaseapp.com",
    databaseURL: "https://smart-chanel-db.firebaseio.com",
    projectId: "smart-chanel-db",
    storageBucket: "smart-chanel-db.appspot.com",
    messagingSenderId: "711029386938"
  };
  firebase.initializeApp(config);
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Mainpro,
    Editpro,
    Sidepro,
    Aboutus,
    Contact,
    Forum,
    Tabs,
    
    
   // SmartApi
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Editpro,
    ListPage,
    Mainpro,
    Sidepro,
    Aboutus,
    Contact,
    Tabs,
    Forum,
    //AngularFireModule
    //SmartApi
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
   
  ]
})
export class AppModule {}
