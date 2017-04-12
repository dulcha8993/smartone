import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Mainpro } from "../pages/mainpro/mainpro";
import { Editpro } from "../pages/editpro/editpro";
import { Tabs } from "../pages/tabs/tabs";
import { AngularFire } from "angularfire2";



@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
 
  

  rootPage: any = Mainpro;

  
  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,angiFire:AngularFire) {
  

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goProfile()
  {
     this.nav.push(Editpro);
  } 

  goemails()
  {
     this.nav.push(Tabs);
  }
}
