import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmrwomenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmrwomen',
  templateUrl: 'bmrwomen.html',
})
export class BmrwomenPage {
  numberA;
  numberB;
  numberC;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrwomenPage');
  }
  addBtn(){
    console.log("add")
    var a = parseInt(this.numberA);
    var b = parseInt(this.numberB);
    var c = parseInt(this.numberC);
    alert(665+(9.6*a)+(1.8*b)-(4.7*c));
  }

}
