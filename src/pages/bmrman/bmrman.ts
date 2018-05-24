import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmrmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmrman',
  templateUrl: 'bmrman.html',
})
export class BmrmanPage {
  numberA;
  numberB;
  numberC;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrmanPage');
  }
  addBtn(){
    console.log("add")
    var a = parseInt(this.numberA);
    var b = parseInt(this.numberB);
    var c = parseInt(this.numberC);
    alert(66+(13.7*a)+(5*b)-(6.8*c));
  }

}
